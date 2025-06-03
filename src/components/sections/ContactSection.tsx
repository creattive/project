import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import Section from '../ui/Section';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    <Section
      id="contact"
      title="Entre em Contato"
      subtitle="Estamos prontos para transformar sua ideia em realidade. Entre em contato conosco para começar a trabalhar juntos."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedElement animation="slideRight">
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-6">Vamos conversar</h3>
              <p className="text-gray-300 mb-8">
                Seja para um orçamento, uma dúvida ou para conhecer melhor nossos serviços, 
                nossa equipe está pronta para atendê-lo e transformar sua ideia em um projeto de sucesso.
              </p>
            </div>

            <div className="space-y-6">
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

            <div className="pt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470400.3683254982!2d-43.726162!3d-22.912897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1629289779830!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                title="Mapa"
              ></iframe>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="bg-dark-800 p-8 rounded-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-green-500/20 rounded-full p-4 mb-4">
                  <svg className="w-10 h-10 text-green-500\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mensagem enviada!</h3>
                <p className="text-gray-400 text-center">
                  Obrigado pelo seu contato. Nossa equipe responderá o mais breve possível.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome completo
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
                      Email
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
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
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
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="input resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
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
            )}
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default ContactSection;