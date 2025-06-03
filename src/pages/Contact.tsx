import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import Section from '../components/ui/Section';
import AnimatedElement from '../components/ui/AnimatedElement';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contato | Indevice Produções e Entretenimento';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg"
            alt="Contato Indevice" 
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
            <h1 className="heading-xl mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-300 mb-8">
              Estamos prontos para transformar sua ideia em realidade. Entre em contato para começar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <Section className="pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <AnimatedElement animation="slideRight">
            <div className="lg:col-span-1">
              <h2 className="heading-md mb-6">Informações de Contato</h2>
              <p className="text-gray-300 mb-8">
                Estamos disponíveis para atender você e tirar todas as suas dúvidas. Entre em contato conosco pelos canais abaixo ou preencha o formulário.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-900/30 rounded-full p-3 text-primary-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Telefone</h4>
                    <p className="text-gray-400">(21) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-900/30 rounded-full p-3 text-primary-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">contato@indevice.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-900/30 rounded-full p-3 text-primary-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Endereço</h4>
                    <p className="text-gray-400">Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-900/30 rounded-full p-3 text-primary-500">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Redes Sociais</h4>
                    <div className="flex space-x-3 mt-2">
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark-800 p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark-800 p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark-800 p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors"
                        aria-label="YouTube"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark-800 p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-900/30 rounded-full p-3 text-primary-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-400">Sábado: 9h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement animation="slideUp" delay={0.2} className="lg:col-span-2">
            <div className="bg-dark-800 p-8 rounded-lg shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-500/20 rounded-full p-4 mb-4">
                    <svg className="w-10 h-10 text-green-500\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mensagem enviada com sucesso!</h3>
                  <p className="text-gray-400 text-center max-w-md">
                    Obrigado pelo seu contato. Nossa equipe responderá o mais breve possível.
                    Geralmente respondemos em até 24 horas úteis.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="heading-md mb-6">Envie uma mensagem</h2>
                  <p className="text-gray-300 mb-8">
                    Preencha o formulário abaixo com seus dados e informações sobre seu projeto.
                    Entraremos em contato o mais breve possível.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="Seu nome"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="input"
                          placeholder="(00) 00000-0000"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Serviço de interesse *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="input"
                        >
                          <option value="">Selecione um serviço</option>
                          <option value="Produção Executiva">Produção Executiva</option>
                          <option value="Direção Técnica">Direção Técnica</option>
                          <option value="Transmissão ao Vivo">Transmissão ao Vivo</option>
                          <option value="Captação e Edição">Captação e Edição</option>
                          <option value="Sonorização">Sonorização</option>
                          <option value="Locação de Equipamentos">Locação de Equipamentos</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="input resize-none"
                        placeholder="Descreva seu projeto ou dúvida em detalhes..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </div>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Enviar mensagem
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedElement>
        </div>

        {/* Map */}
        <div className="mt-16">
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <div className="bg-dark-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Nossa Localização</h3>
              <div className="aspect-[16/7] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470400.3683254982!2d-43.726162!3d-22.912897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1629289779830!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa"
                ></iframe>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Perguntas Frequentes" subtitle="Encontre respostas para as dúvidas mais comuns." dark>
        <div className="max-w-3xl mx-auto">
          <AnimatedElement animation="fadeIn">
            <div className="space-y-6">
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Qual o prazo de resposta para orçamentos?</h3>
                <p className="text-gray-400">
                  Normalmente, respondemos a solicitações de orçamento em até 24 horas úteis. Para projetos 
                  mais complexos, podemos precisar de um pouco mais de tempo para analisar e elaborar uma 
                  proposta detalhada.
                </p>
              </div>
              
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Vocês atendem fora do Rio de Janeiro?</h3>
                <p className="text-gray-400">
                  Sim, atendemos em todo o território nacional. Nossa equipe está preparada para se deslocar 
                  conforme as necessidades do projeto. Os custos de deslocamento serão incluídos no orçamento.
                </p>
              </div>
              
              <div className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Como funciona o processo de pagamento?</h3>
                <p className="text-gray-400">
                  Geralmente, trabalhamos com um sinal inicial de 40% para reserva de data e início dos 
                  preparativos, 30% no dia do evento ou início das filmagens, e 30% na entrega do material final.
                  Contudo, podemos adaptar este modelo de acordo com as particularidades de cada projeto.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  );
};

export default Contact;