import React from 'react';
import { Film } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-800">
      <div className="animate-pulse">
        <Film size={48} className="text-primary-500" />
      </div>
      <div className="mt-4 text-primary-400 font-medium">Carregando...</div>
    </div>
  );
};

export default Loading;