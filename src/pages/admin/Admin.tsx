import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import { Film, Users, Briefcase, MessageSquare, Settings, LogOut } from 'lucide-react';
import { isAuthenticated, setAuthenticated } from '../../utils/localStorage';
import Login from './Login';
import Dashboard from './Dashboard';
import PortfolioAdmin from './PortfolioAdmin';
import ServicesAdmin from './ServicesAdmin';
import TeamAdmin from './TeamAdmin';
import TestimonialsAdmin from './TestimonialsAdmin';

const Admin: React.FC = () => {
  const [authenticated, setIsAuthenticated] = useState(isAuthenticated());
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Área Administrativa | Indevice Produções e Entretenimento';
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
    setIsAuthenticated(true);
    navigate('/admin');
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsAuthenticated(false);
    navigate('/admin/login');
  };

  if (!authenticated) {
    return (
      <Routes>
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/admin/login\" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-16">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-dark-800 w-full md:w-64 md:min-h-[calc(100vh-4rem)] md:fixed">
          <div className="p-6 border-b border-dark-700">
            <div className="flex items-center space-x-3">
              <Film className="w-6 h-6 text-primary-500" />
              <span className="text-lg font-semibold text-white">Admin</span>
            </div>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-dark-700 text-gray-300 hover:text-white transition-colors"
                >
                  <Settings size={18} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/portfolio"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-dark-700 text-gray-300 hover:text-white transition-colors"
                >
                  <Film size={18} />
                  <span>Portfólio</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/services"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-dark-700 text-gray-300 hover:text-white transition-colors"
                >
                  <Briefcase size={18} />
                  <span>Serviços</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/team"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-dark-700 text-gray-300 hover:text-white transition-colors"
                >
                  <Users size={18} />
                  <span>Equipe</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/testimonials"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-dark-700 text-gray-300 hover:text-white transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Depoimentos</span>
                </Link>
              </li>
              <li className="pt-4 mt-4 border-t border-dark-700">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-dark-700 text-gray-300 hover:text-white transition-colors w-full text-left"
                >
                  <LogOut size={18} />
                  <span>Sair</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<PortfolioAdmin />} />
            <Route path="/services" element={<ServicesAdmin />} />
            <Route path="/team" element={<TeamAdmin />} />
            <Route path="/testimonials" element={<TestimonialsAdmin />} />
            <Route path="*" element={<Navigate to="/admin\" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;