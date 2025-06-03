import React from 'react';
import { Award, Users, Tv, Briefcase } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import { useInView } from 'react-intersection-observer';

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Award size={24} className="text-primary-400" />,
      value: 100,
      label: 'Projetos Completos',
      suffix: '+',
    },
    {
      icon: <Users size={24} className="text-primary-400" />,
      value: 25,
      label: 'Profissionais',
      suffix: '+',
    },
    {
      icon: <Tv size={24} className="text-primary-400" />,
      value: 10,
      label: 'Anos de Experiência',
      suffix: '+',
    },
    {
      icon: <Briefcase size={24} className="text-primary-400" />,
      value: 50,
      label: 'Clientes Satisfeitos',
      suffix: '+',
    },
  ];

  return (
    <div ref={ref} className="bg-primary-900/20 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedElement 
              key={index} 
              animation="zoomIn" 
              delay={0.1 * index}
            >
              <div className="text-center">
                <div className="bg-dark-800 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {inView ? (
                    <>
                      {stat.value}{stat.suffix}
                    </>
                  ) : (
                    <>0{stat.suffix}</>
                  )}
                </div>
                <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;