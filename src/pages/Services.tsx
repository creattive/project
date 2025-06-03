import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import AnimatedElement from '../components/ui/AnimatedElement';
import { getServices } from '../utils/localStorage';
import { initialServices, getServiceIcon } from '../data/initialData';

const Services: React.FC = () => {
  const services = getServices().length > 0 ? getServices() : initialServices;

  useEffect(() => {
    document.title = 'Serviços | Indevice Produções e Entretenimento';
    window.scrollTo(0, 0);
    
    // Scroll to specific service if hash exists
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg"
            alt="Serviços Indevice" 
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
            <h1 className="heading-xl mb-6">Nossos Serviços</h1>
            <p className="text-xl text-gray-300 mb-8">
              Soluções completas em produção audiovisual para transformar sua visão em realidade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <Section className="pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fadeIn">
            <p className="text-gray-300 text-lg">
              Na Indevice, oferecemos uma gama completa de serviços de produção audiovisual,
              desde o planejamento inicial até a finalização do projeto. Nossa equipe de
              profissionais experientes está pronta para transformar sua visão em realidade,
              utilizando equipamentos de última geração e técnicas inovadoras.
            </p>
          </AnimatedElement>
        </div>
      </Section>

      {/* Services List */}
      <Section className="pt-0">
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.icon);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id} 
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <AnimatedElement 
                  animation={isEven ? "slideRight" : "fadeIn"}
                  className={`${!isEven && 'lg:order-2'}`}
                >
                  <div className={`bg-dark-800 p-10 rounded-lg shadow-lg relative ${isEven ? 'lg:-mr-8' : 'lg:-ml-8'}`}>
                    <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
                      <div className="bg-primary-600 p-4 rounded-full">
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>
                    <h3 className="heading-md mb-6 mt-6">{service.title}</h3>
                    <p className="text-gray-300 mb-8">
                      {service.description}
                    </p>
                    {service.features && (
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </AnimatedElement>
                
                <AnimatedElement 
                  animation={isEven ? "fadeIn" : "slideRight"}
                  className={`${isEven && 'lg:order-2'}`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${2510000 + index * 100}/pexels-photo-${2510000 + index * 100}.jpeg`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimatedElement>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Custom Solutions */}
      <Section title="Soluções Personalizadas" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="fadeIn">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/7096494/pexels-photo-7096494.jpeg"
                alt="Soluções Personalizadas"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slideUp">
            <h3 className="heading-md mb-6">Adaptamos nossos serviços às suas necessidades</h3>
            <p className="text-gray-300 mb-6">
              Entendemos que cada projeto é único e requer uma abordagem personalizada. 
              Por isso, oferecemos soluções sob medida, combinando diferentes serviços 
              e adaptando nossa metodologia às especificidades do seu projeto.
            </p>
            <p className="text-gray-300 mb-8">
              Seja um evento corporativo, um documentário, uma campanha publicitária ou 
              uma websérie, nossa equipe está preparada para oferecer a solução ideal, 
              dentro do seu orçamento e cronograma.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Solicitar orçamento personalizado
            </Link>
          </AnimatedElement>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Perguntas Frequentes" subtitle="Encontre respostas para as dúvidas mais comuns sobre nossos serviços.">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement animation="fadeIn">
            <div className="space-y-6">
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Qual é o processo de contratação dos serviços?</h3>
                <p className="text-gray-400">
                  O processo começa com uma consulta inicial para entendermos suas necessidades. 
                  Em seguida, elaboramos uma proposta detalhada com escopo, cronograma e orçamento. 
                  Após a aprovação, iniciamos o planejamento e execução do projeto, mantendo comunicação 
                  constante até a entrega final.
                </p>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Vocês atendem em todo o Brasil?</h3>
                <p className="text-gray-400">
                  Sim, a Indevice tem sede no Rio de Janeiro, mas atua em todo o território nacional. 
                  Nossa equipe está preparada para se deslocar conforme as necessidades do projeto.
                </p>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Qual o prazo médio para a entrega de um projeto?</h3>
                <p className="text-gray-400">
                  O prazo varia de acordo com a complexidade e escopo do projeto. Projetos simples 
                  podem ser finalizados em poucos dias, enquanto produções mais elaboradas podem levar 
                  semanas ou meses. Durante a fase de proposta, estabelecemos um cronograma detalhado 
                  com marcos e prazos específicos.
                </p>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Vocês oferecem pacotes para pequenas empresas?</h3>
                <p className="text-gray-400">
                  Sim, temos soluções adaptadas para empresas de todos os portes. Nossos pacotes para 
                  pequenas empresas são projetados para oferecer qualidade profissional com investimento 
                  acessível, focando nos elementos essenciais para atingir os objetivos de comunicação.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-900 to-secondary-900 py-20">
        <div className="container-custom text-center">
          <AnimatedElement animation="fadeIn">
            <h2 className="heading-lg text-white mb-6">Pronto para transformar sua ideia em realidade?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Entre em contato conosco para discutir seu projeto e descobrir como podemos ajudar.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Solicitar orçamento
            </Link>
          </AnimatedElement>
        </div>
      </div>
    </>
  );
};

export default Services;