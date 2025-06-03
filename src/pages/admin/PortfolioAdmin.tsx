import React, { useState, useEffect } from 'react';
import { Film, Plus, Trash2, Edit, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPortfolioItems, savePortfolioItems, PortfolioItem } from '../../utils/localStorage';
import { initialPortfolio } from '../../data/initialData';

const PortfolioAdmin: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [formState, setFormState] = useState<PortfolioItem>({
    id: '',
    title: '',
    category: '',
    image: '',
    description: '',
    date: '',
    client: '',
    videoUrl: '',
  });

  useEffect(() => {
    const items = getPortfolioItems();
    setPortfolioItems(items.length > 0 ? items : initialPortfolio);
  }, []);

  const resetForm = () => {
    setFormState({
      id: '',
      title: '',
      category: '',
      image: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      client: '',
      videoUrl: '',
    });
    setEditingItem(null);
  };

  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (item: PortfolioItem) => {
    setFormState({
      ...item,
      date: new Date(item.date).toISOString().split('T')[0],
    });
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
      const updatedItems = portfolioItems.filter(item => item.id !== id);
      setPortfolioItems(updatedItems);
      savePortfolioItems(updatedItems);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem = {
      ...formState,
      id: editingItem ? editingItem.id : Date.now().toString(),
    };
    
    let updatedItems;
    
    if (editingItem) {
      updatedItems = portfolioItems.map(item => 
        item.id === editingItem.id ? newItem : item
      );
    } else {
      updatedItems = [...portfolioItems, newItem];
    }
    
    setPortfolioItems(updatedItems);
    savePortfolioItems(updatedItems);
    setShowForm(false);
    resetForm();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Gerenciar Portfólio</h1>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Novo Projeto
        </button>
      </div>

      {showForm && (
        <div className="bg-dark-800 rounded-lg p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {editingItem ? 'Editar Projeto' : 'Adicionar Novo Projeto'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Título *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Categoria *
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formState.category}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Ex: Eventos, Shows, Documentário"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                  Data *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formState.date}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="client" className="block text-sm font-medium text-gray-300 mb-2">
                  Cliente
                </label>
                <input
                  type="text"
                  id="client"
                  name="client"
                  value={formState.client}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                URL da Imagem *
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formState.image}
                onChange={handleChange}
                required
                className="input"
                placeholder="https://example.com/image.jpg"
              />
              {formState.image && (
                <div className="mt-2">
                  <img 
                    src={formState.image} 
                    alt="Preview" 
                    className="h-20 w-auto object-cover rounded"
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-300 mb-2">
                URL do Vídeo
              </label>
              <input
                type="url"
                id="videoUrl"
                name="videoUrl"
                value={formState.videoUrl}
                onChange={handleChange}
                className="input"
                placeholder="https://vimeo.com/example"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Descrição *
              </label>
              <textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleChange}
                required
                rows={4}
                className="input"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-dark-700 text-gray-300 rounded-md hover:bg-dark-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                {editingItem ? 'Atualizar' : 'Adicionar'} Projeto
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-dark-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-dark-700">
          <h2 className="text-lg font-semibold text-white">Projetos</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-dark-700">
            <thead className="bg-dark-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Projeto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Data
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-700">
              {portfolioItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-400">
                    Nenhum projeto encontrado
                  </td>
                </tr>
              ) : (
                portfolioItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 mr-3">
                          <img className="h-10 w-10 rounded object-cover" src={item.image} alt={item.title} />
                        </div>
                        <div className="text-sm font-medium text-white">{item.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(item.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {item.client || '—'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link 
                          to={`/portfolio#${item.id}`} 
                          target="_blank"
                          className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-dark-700"
                          title="Visualizar"
                        >
                          <Eye size={18} />
                        </Link>
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-dark-700"
                          title="Editar"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-dark-700"
                          title="Excluir"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAdmin;