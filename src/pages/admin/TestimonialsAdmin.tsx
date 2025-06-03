import React, { useState, useEffect } from 'react';
import { MessageSquare, Plus, Trash2, Edit, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTestimonials, saveTestimonials, Testimonial } from '../../utils/localStorage';
import { initialTestimonials } from '../../data/initialData';

const TestimonialsAdmin: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formState, setFormState] = useState<Testimonial>({
    id: '',
    name: '',
    company: '',
    text: '',
    image: '',
  });

  useEffect(() => {
    const items = getTestimonials();
    setTestimonials(items.length > 0 ? items : initialTestimonials);
  }, []);

  const resetForm = () => {
    setFormState({
      id: '',
      name: '',
      company: '',
      text: '',
      image: '',
    });
    setEditingTestimonial(null);
  };

  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormState({
      ...testimonial,
    });
    setEditingTestimonial(testimonial);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este depoimento?')) {
      const updatedTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
      setTestimonials(updatedTestimonials);
      saveTestimonials(updatedTestimonials);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonial = {
      ...formState,
      id: editingTestimonial ? editingTestimonial.id : Date.now().toString(),
    };
    
    let updatedTestimonials;
    
    if (editingTestimonial) {
      updatedTestimonials = testimonials.map(testimonial => 
        testimonial.id === editingTestimonial.id ? newTestimonial : testimonial
      );
    } else {
      updatedTestimonials = [...testimonials, newTestimonial];
    }
    
    setTestimonials(updatedTestimonials);
    saveTestimonials(updatedTestimonials);
    setShowForm(false);
    resetForm();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Gerenciar Depoimentos</h1>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Novo Depoimento
        </button>
      </div>

      {showForm && (
        <div className="bg-dark-800 rounded-lg p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {editingTestimonial ? 'Editar Depoimento' : 'Adicionar Novo Depoimento'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                URL da Imagem
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formState.image}
                onChange={handleChange}
                className="input"
                placeholder="https://example.com/image.jpg"
              />
              {formState.image && (
                <div className="mt-2">
                  <img 
                    src={formState.image} 
                    alt="Preview" 
                    className="h-20 w-auto object-cover rounded-full"
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
                Depoimento *
              </label>
              <textarea
                id="text"
                name="text"
                value={formState.text}
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
                {editingTestimonial ? 'Atualizar' : 'Adicionar'} Depoimento
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-dark-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-dark-700">
          <h2 className="text-lg font-semibold text-white">Depoimentos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {testimonials.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-8">
              Nenhum depoimento encontrado
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-dark-700 rounded-lg p-6 relative">
                <div className="absolute top-4 right-4 flex space-x-1">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-dark-600"
                    title="Editar"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-dark-600"
                    title="Excluir"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="flex flex-col items-center mb-4">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {testimonial.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-primary-400 text-sm">{testimonial.company}</p>
                </div>
                
                <blockquote className="text-gray-300 text-sm italic mb-3">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAdmin;