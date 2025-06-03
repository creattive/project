import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Página não encontrada | Indevice Produções e Entretenimento';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-32">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Página não encontrada</h2>
        <p className="text-gray-300 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="btn btn-primary">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;