import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../ui/AnimatedElement';
import Section from '../ui/Section';
import { getServices } from '../../utils/localStorage';
import { initialServices, getServiceIcon } from '../../data/initialData';

const ServicesSection: React.FC = () => {
  const services = getServices().length > 0 ? getServices() : initialServices;
  
  // Only show first 4 services on homepage
  const displayedServices = services.slice(0, 4);

  return (
    <Section 
      id="services" 
      title="Nossos Serviços" 
      subtitle="Oferecemos soluções completas em produção audiovisual para tornar sua visão realidade."
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedServices.map((service, index) => {
          const IconComponent = getServiceIcon(service.icon);
          
          return (
            <AnimatedElement
              key={service.id}
              animation="zoomIn"
              delay={0.1 * index}
              className="h-full"
            >
              <div className="card p-6 h-full flex flex-col hover:bg-dark-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="rounded-full bg-primary-900/30 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
                {service.features && (
                  <ul className="mt-2 space-y-1 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <Link 
                  to={`/servicos#${service.id}`} 
                  className="text-primary-400 text-sm font-medium hover:text-primary-300 inline-flex items-center mt-auto"
                >
                  Saiba mais
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedElement>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <AnimatedElement animation="fadeIn" delay={0.5}>
          <Link to="/servicos" className="btn btn-secondary">
            Ver todos os serviços
          </Link>
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default ServicesSection;