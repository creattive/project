import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Section from '../components/ui/Section';
import AnimatedElement from '../components/ui/AnimatedElement';
import { getPortfolioItems } from '../utils/localStorage';
import { initialPortfolio } from '../data/initialData';
import Masonry from 'react-masonry-css';

const Portfolio: React.FC = () => {
  const allPortfolioItems = getPortfolioItems().length > 0 ? getPortfolioItems() : initialPortfolio;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<typeof allPortfolioItems[0] | null>(null);

  const categories = ['all', ...Array.from(new Set(allPortfolioItems.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'all' 
    ? allPortfolioItems 
    : allPortfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    document.title = 'Portfólio | Indevice Produções e Entretenimento';
    window.scrollTo(0, 0);
    
    // Check for hash in URL to open project details
    const hash = window.location.hash;
    if (hash) {
      const projectId = hash.substring(1);
      const project = allPortfolioItems.find(item => item.id === projectId);
      if (project) {
        setSelectedItem(project);
      }
    }
  }, [allPortfolioItems]);

  // Project modal handling
  const openProject = (item: typeof allPortfolioItems[0]) => {
    setSelectedItem(item);
    // Update URL with hash without reloading page
    window.history.pushState(null, '', `#${item.id}`);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedItem(null);
    // Remove hash from URL
    window.history.pushState(null, '', window.location.pathname);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProject();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled when component unmounts
    };
  }, []);

  // Masonry breakpoints
  const breakpointColumns = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
            alt="Portfólio Indevice" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl mb-6">Nosso Portfólio</h1>
            <p className="text-xl text-gray-300 mb-8">
              Conheça alguns dos projetos que realizamos e descubra como podemos transformar sua visão em realidade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Filter and Grid */}
      <Section className="pb-24">
        {/* Category Filters */}
        <div className="mb-12">
          <AnimatedElement animation="fadeIn">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                  }`}
                >
                  {category === 'all' ? 'Todos' : category}
                </button>
              ))}
            </div>
          </AnimatedElement>
        </div>

        {/* Portfolio Grid */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="mb-4"
              >
                <div 
                  className="card group overflow-hidden cursor-pointer"
                  onClick={() => openProject(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="btn btn-primary px-4 py-2 text-sm">
                        Ver Detalhes
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-primary-400 mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </AnimatedElement>
      </Section>

      {/* Project Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-dark-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 bg-dark-900/50 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-sm font-medium text-primary-400 mb-2">
                {selectedItem.category}
              </div>
              <h3 className="heading-md mb-4">
                {selectedItem.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {selectedItem.client && (
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Cliente</h4>
                    <p className="text-white">{selectedItem.client}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Data</h4>
                  <p className="text-white">
                    {new Date(selectedItem.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
                
                {selectedItem.videoUrl && (
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Vídeo</h4>
                    <a 
                      href={selectedItem.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Assistir online
                    </a>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Sobre o Projeto</h4>
                <p className="text-gray-300">
                  {selectedItem.description}
                </p>
              </div>
              
              {/* Example of additional project details that could be added */}
              <div className="border-t border-dark-600 pt-6 mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">Serviços Realizados</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                    Direção de Fotografia
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                    Captação de Imagens
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                    Edição e Finalização
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                    Sonorização
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Portfolio;