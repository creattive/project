import React from 'react';
import { Award, Users, Lightbulb } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import Section from '../ui/Section';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Award size={32} className="text-primary-500" />,
      title: 'Experiência Consolidada',
      description: 'Mais de 10 anos de atuação no mercado audiovisual, com projetos para grandes empresas e eventos culturais.',
    },
    {
      icon: <Users size={32} className="text-primary-500" />,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e comprometidos com a excelência em todas as etapas da produção.',
    },
    {
      icon: <Lightbulb size={32} className="text-primary-500" />,
      title: 'Inovação Constante',
      description: 'Buscamos sempre as melhores soluções tecnológicas e criativas para cada projeto.',
    },
  ];

  return (
    <Section 
      id="about" 
      title="Sobre Nós" 
      subtitle="A Indevice Produções e Entretenimento é uma produtora audiovisual e cultural sediada no Rio de Janeiro, com atuação nacional e experiência consolidada."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedElement animation="fadeIn">
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
                alt="Equipe Indevice em produção"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-dark-800 p-6 rounded-lg shadow-xl hidden lg:block">
              <p className="text-4xl font-bold text-primary-500">10+</p>
              <p className="text-white">Anos de experiência</p>
            </div>
          </div>
        </AnimatedElement>

        <div className="space-y-8">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h3 className="heading-md mb-4">Nossa História</h3>
            <p className="text-gray-300 mb-6">
              Fundada por Wagner Baiano, profissional com mais de 10 anos de experiência na TV Globo 
              e no mercado de televisão, a Indevice oferece soluções completas em produção executiva, 
              direção técnica, imagem, cobertura multicâmera, captação, edição e locação de equipamentos 
              para projetos culturais e de entretenimento ao vivo ou gravado.
            </p>
            <p className="text-gray-300">
              Nosso lema é simples e potente: "Nascemos para tornar seus eventos diferentes."
              A cada projeto, assumimos o compromisso de entregar não apenas uma produção eficiente, 
              mas uma experiência transformadora, inovadora e alinhada com os valores do público e dos patrocinadores.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <AnimatedElement key={index} animation="slideUp" delay={0.3 + index * 0.1}>
                <div className="p-6 bg-dark-800 rounded-lg h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;