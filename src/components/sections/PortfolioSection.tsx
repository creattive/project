import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import Section from '../ui/Section';
import { getPortfolioItems } from '../../utils/localStorage';
import { initialPortfolio } from '../../data/initialData';

const PortfolioSection: React.FC = () => {
  const allPortfolioItems = getPortfolioItems().length > 0 ? getPortfolioItems() : initialPortfolio;
  
  // Only show first 3 items on homepage
  const displayedItems = allPortfolioItems.slice(0, 3);
  
  return (
    <Section 
      id="portfolio" 
      title="Projetos Recentes" 
      subtitle="Confira alguns dos nossos trabalhos mais recentes e descubra como podemos ajudar a tornar seu próximo projeto realidade."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedItems.map((item, index) => (
          <AnimatedElement
            key={item.id}
            animation="fadeIn"
            delay={0.1 * index}
          >
            <div className="card group overflow-hidden h-full">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link 
                    to={`/portfolio#${item.id}`} 
                    className="btn btn-primary px-4 py-2 text-sm"
                  >
                    Ver Projeto
                  </Link>
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
          </AnimatedElement>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedElement animation="fadeIn" delay={0.5}>
          <Link to="/portfolio" className="btn btn-secondary">
            Ver todos os projetos
          </Link>
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default PortfolioSection;