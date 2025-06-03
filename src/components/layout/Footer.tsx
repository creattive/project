import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Film, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">INDEVICE</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Produtora audiovisual e cultural sediada no Rio de Janeiro, com atuação nacional e experiência consolidada no desenvolvimento de projetos criativos, tecnológicos e de impacto social.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/servicos" className="hover:text-primary-500 transition-colors">
                  Produção Executiva
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-500 transition-colors">
                  Direção Técnica
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-500 transition-colors">
                  Transmissão ao Vivo
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-500 transition-colors">
                  Captação e Edição
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-500 transition-colors">
                  Sonorização
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-500 transition-colors">
                  Locação de Equipamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-primary-500 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary-500 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary-500 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary-500 transition-colors">
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <span>Rio de Janeiro, RJ - Brasil</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <span>(21) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <a 
                  href="mailto:contato@indevice.com.br" 
                  className="hover:text-primary-500 transition-colors"
                >
                  contato@indevice.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-600 text-center text-gray-500 text-sm">
          <p>© {currentYear} Indevice Produções e Entretenimento. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;