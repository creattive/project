import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, FilmIcon, Target, Clock, Users, Star } from 'lucide-react';
import Section from '../components/ui/Section';
import AnimatedElement from '../components/ui/AnimatedElement';
import { getTeamMembers } from '../utils/localStorage';
import { initialTeam } from '../data/initialData';

const About: React.FC = () => {
  const teamMembers = getTeamMembers().length > 0 ? getTeamMembers() : initialTeam;

  useEffect(() => {
    document.title = 'Sobre Nós | Indevice Produções e Entretenimento';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: 'Excelência',
      description: 'Buscamos a excelência em cada detalhe do nosso trabalho, superando expectativas.',
    },
    {
      icon: <FilmIcon className="w-6 h-6 text-primary-500" />,
      title: 'Criatividade',
      description: 'Combinamos técnica e criatividade para transformar ideias em produções de impacto.',
    },
    {
      icon: <Target className="w-6 h-6 text-primary-500" />,
      title: 'Compromisso',
      description: 'Comprometidos com os resultados e com a satisfação dos nossos clientes.',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: 'Pontualidade',
      description: 'Respeitamos prazos e cronogramas, garantindo entregas no tempo acordado.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg"
            alt="Equipe Indevice" 
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
            <h1 className="heading-xl mb-6">Sobre a Indevice</h1>
            <p className="text-xl text-gray-300 mb-8">
              Conheça nossa história, equipe e valores que orientam nossa produtora.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <Section title="Nossa História" className="pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="fadeIn">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg"
                alt="História da Indevice"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedElement>

          <div className="space-y-6">
            <AnimatedElement animation="slideUp" delay={0.2}>
              <p className="text-gray-300">
                Fundada por Wagner Baiano, profissional com mais de 10 anos de experiência na TV Globo 
                e no mercado de televisão, a Indevice Produções e Entretenimento nasceu da paixão pelo 
                audiovisual e da visão de criar uma produtora que unisse excelência técnica e sensibilidade 
                artística.
              </p>
              <p className="text-gray-300">
                Desde o início, nossa missão foi clara: oferecer soluções audiovisuais completas e inovadoras, 
                adaptadas às necessidades específicas de cada cliente e projeto. Ao longo dos anos, construímos 
                uma reputação sólida no mercado, baseada na qualidade de nossas entregas e no compromisso com 
                resultados.
              </p>
              <p className="text-gray-300">
                Hoje, contamos com uma equipe multidisciplinar de profissionais experientes e apaixonados, 
                equipamentos de última geração e uma carteira diversificada de clientes e projetos. Seguimos 
                firmes em nosso propósito de "Nascer para tornar seus eventos diferentes", transformando ideias 
                em experiências audiovisuais memoráveis.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section title="Nossos Valores" dark className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedElement
              key={index}
              animation="zoomIn"
              delay={0.1 * index}
            >
              <div className="bg-dark-700 p-6 rounded-lg h-full hover:bg-dark-600 transition-colors duration-300">
                <div className="rounded-full bg-primary-900/30 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Our Team */}
      <Section title="Nossa Equipe" subtitle="Conheça os profissionais talentosos por trás da Indevice." className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedElement
              key={member.id}
              animation="fadeIn"
              delay={0.1 * index}
            >
              <div className="card overflow-hidden group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      {member.social && (
                        <div className="flex space-x-3 mb-4">
                          {member.social.linkedin && (
                            <a 
                              href={member.social.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-dark-800/80 p-2 rounded-full text-white hover:bg-primary-600 transition-colors"
                              aria-label="LinkedIn"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                          {member.social.instagram && (
                            <a 
                              href={member.social.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-dark-800/80 p-2 rounded-full text-white hover:bg-primary-600 transition-colors"
                              aria-label="Instagram"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm line-clamp-3">{member.bio}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-900 to-secondary-900 py-20">
        <div className="container-custom text-center">
          <AnimatedElement animation="fadeIn">
            <h2 className="heading-lg text-white mb-6">Pronto para trabalhar conosco?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Transforme sua ideia em realidade com a Indevice. Entre em contato para discutir seu próximo projeto.
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

export default About;