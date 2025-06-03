import React from 'react';
import { 
  Users, Film, MessageSquare, Briefcase, Eye, Clock 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPortfolioItems, getServices, getTeamMembers, getTestimonials } from '../../utils/localStorage';
import { initialPortfolio, initialServices, initialTeam, initialTestimonials } from '../../data/initialData';

const Dashboard: React.FC = () => {
  const portfolioItems = getPortfolioItems().length > 0 ? getPortfolioItems() : initialPortfolio;
  const services = getServices().length > 0 ? getServices() : initialServices;
  const teamMembers = getTeamMembers().length > 0 ? getTeamMembers() : initialTeam;
  const testimonials = getTestimonials().length > 0 ? getTestimonials() : initialTestimonials;

  const stats = [
    { 
      name: 'Projetos', 
      count: portfolioItems.length, 
      icon: <Film className="h-5 w-5 text-primary-500" />,
      link: '/admin/portfolio'
    },
    { 
      name: 'Serviços', 
      count: services.length, 
      icon: <Briefcase className="h-5 w-5 text-primary-500" />,
      link: '/admin/services'
    },
    { 
      name: 'Membros da Equipe', 
      count: teamMembers.length, 
      icon: <Users className="h-5 w-5 text-primary-500" />,
      link: '/admin/team'
    },
    { 
      name: 'Depoimentos', 
      count: testimonials.length, 
      icon: <MessageSquare className="h-5 w-5 text-primary-500" />,
      link: '/admin/testimonials'
    },
  ];

  const recentProjects = portfolioItems.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-dark-800 rounded-lg p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary-900/20 p-3 rounded-full">
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold text-white">{stat.count}</span>
              </div>
              <h3 className="text-gray-300 text-sm mb-3">{stat.name}</h3>
              <Link 
                to={stat.link} 
                className="text-primary-400 text-xs font-medium inline-flex items-center"
              >
                Ver todos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Recent Projects */}
        <div className="bg-dark-800 rounded-lg p-6 shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-white">Projetos Recentes</h2>
            <Link 
              to="/admin/portfolio" 
              className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
            >
              Ver todos
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-400 border-b border-dark-700">
                  <th className="pb-3 font-medium">Título</th>
                  <th className="pb-3 font-medium">Categoria</th>
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project) => (
                  <tr key={project.id} className="border-b border-dark-700 last:border-none">
                    <td className="py-4 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="truncate max-w-[150px]">{project.title}</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-300">{project.category}</td>
                    <td className="py-4 text-gray-300">
                      {new Date(project.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="py-4 text-gray-300">{project.client || '—'}</td>
                    <td className="py-4 text-right">
                      <Link 
                        to={`/portfolio#${project.id}`} 
                        target="_blank"
                        className="inline-flex items-center justify-center p-2 bg-dark-700 rounded-full text-gray-300 hover:text-primary-400 transition-colors"
                      >
                        <Eye size={16} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Welcome Message and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-dark-800 rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold text-white mb-4">Bem-vindo ao Painel Administrativo</h2>
          <p className="text-gray-300 mb-4">
            Este painel permite gerenciar o conteúdo do site da Indevice Produções. 
            Aqui você pode adicionar ou editar projetos, serviços, membros da equipe e depoimentos.
          </p>
          <p className="text-gray-300 mb-4">
            Os dados são armazenados localmente no seu navegador utilizando localStorage. 
            Em um ambiente de produção, esses dados seriam persistidos em um banco de dados.
          </p>
          <p className="text-gray-400 text-sm">
            <Clock className="inline h-4 w-4 mr-1" />
            Último acesso: {new Date().toLocaleString('pt-BR')}
          </p>
        </div>
        
        <div className="bg-dark-800 rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h2>
          <div className="space-y-2">
            <Link 
              to="/admin/portfolio" 
              className="flex items-center space-x-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors text-gray-300 hover:text-white"
            >
              <Film size={18} className="text-primary-500" />
              <span>Adicionar novo projeto</span>
            </Link>
            <Link 
              to="/admin/services" 
              className="flex items-center space-x-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors text-gray-300 hover:text-white"
            >
              <Briefcase size={18} className="text-primary-500" />
              <span>Gerenciar serviços</span>
            </Link>
            <Link 
              to="/admin/team" 
              className="flex items-center space-x-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors text-gray-300 hover:text-white"
            >
              <Users size={18} className="text-primary-500" />
              <span>Atualizar equipe</span>
            </Link>
            <Link 
              to="/admin/testimonials" 
              className="flex items-center space-x-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors text-gray-300 hover:text-white"
            >
              <MessageSquare size={18} className="text-primary-500" />
              <span>Adicionar depoimento</span>
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-dark-700">
            <Link 
              to="/" 
              target="_blank"
              className="text-primary-400 hover:text-primary-300 transition-colors flex items-center"
            >
              <Eye size={16} className="mr-2" />
              Visualizar site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;