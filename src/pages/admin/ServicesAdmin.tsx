import React, { useState, useEffect } from 'react';
import { Briefcase, Plus, Trash2, Edit, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getServices, saveServices, Service } from '../../utils/localStorage';
import { initialServices, getServiceIcon } from '../../data/initialData';

const ServicesAdmin: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formState, setFormState] = useState<Service>({
    id: '',
    title: '',
    description: '',
    icon: '',
    features: ['', '', '', ''],
  });

  useEffect(() => {
    const items = getServices();
    setServices(items.length > 0 ? items : initialServices);
  }, []);

  const resetForm = () => {
    setFormState({
      id: '',
      title: '',
      description: '',
      icon: 'Briefcase',
      features: ['', '', '', ''],
    });
    setEditingService(null);
  };

  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (service: Service) => {
    // Ensure features array has at least 4 items
    const features = service.features ? 
      [...service.features, '', '', '', ''].slice(0, 4) : 
      ['', '', '', ''];
    
    setFormState({
      ...service,
      features,
    });
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
      const updatedServices = services.filter(service => service.id !== id);
      setServices(updatedServices);
      saveServices(updatedServices);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formState.features!];
    updatedFeatures[index] = value;
    setFormState(prev => ({ ...prev, features: updatedFeatures }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out empty features
    const filteredFeatures = formState.features?.filter(feature => feature.trim() !== '') || [];
    
    const newService = {
      ...formState,
      id: editingService ? editingService.id : Date.now().toString(),
      features: filteredFeatures,
    };
    
    let updatedServices;
    
    if (editingService) {
      updatedServices = services.map(service => 
        service.id === editingService.id ? newService : service
      );
    } else {
      updatedServices = [...services, newService];
    }
    
    setServices(updatedServices);
    saveServices(updatedServices);
    setShowForm(false);
    resetForm();
  };

  // Available icon options
  const iconOptions = [
    'Briefcase', 'Camera', 'Film', 'Video', 'MonitorPlay', 
    'Music', 'Mic', 'Lightbulb', 'Clapperboard', 'Award', 'Users'
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Gerenciar Serviços</h1>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Novo Serviço
        </button>
      </div>

      {showForm && (
        <div className="bg-dark-800 rounded-lg p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {editingService ? 'Editar Serviço' : 'Adicionar Novo Serviço'}
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
                <label htmlFor="icon" className="block text-sm font-medium text-gray-300 mb-2">
                  Ícone *
                </label>
                <select
                  id="icon"
                  name="icon"
                  value={formState.icon}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
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
                rows={3}
                className="input"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Características (até 4)
              </label>
              <div className="space-y-3">
                {formState.features?.map((feature, index) => (
                  <input
                    key={index}
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="input"
                    placeholder={`Característica ${index + 1}`}
                  />
                ))}
              </div>
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
                {editingService ? 'Atualizar' : 'Adicionar'} Serviço
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-dark-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-dark-700">
          <h2 className="text-lg font-semibold text-white">Serviços</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {services.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-8">
              Nenhum serviço encontrado
            </div>
          ) : (
            services.map((service) => {
              const IconComponent = getServiceIcon(service.icon);
              
              return (
                <div key={service.id} className="bg-dark-700 rounded-lg p-6 relative">
                  <div className="absolute top-4 right-4 flex space-x-1">
                    <Link 
                      to={`/servicos#${service.id}`} 
                      target="_blank"
                      className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-dark-600"
                      title="Visualizar"
                    >
                      <Eye size={16} />
                    </Link>
                    <button
                      onClick={() => handleEdit(service)}
                      className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-dark-600"
                      title="Editar"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-dark-600"
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center mb-4 mt-2">
                    <div className="rounded-full bg-primary-900/30 p-3 mr-3">
                      <IconComponent size={20} className="text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-1">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesAdmin;