import React, { useState, useEffect } from 'react';
import { Users, Plus, Trash2, Edit, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTeamMembers, saveTeamMembers, TeamMember } from '../../utils/localStorage';
import { initialTeam } from '../../data/initialData';

const TeamAdmin: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formState, setFormState] = useState<TeamMember>({
    id: '',
    name: '',
    role: '',
    bio: '',
    image: '',
    social: {
      linkedin: '',
      instagram: '',
    },
  });

  useEffect(() => {
    const members = getTeamMembers();
    setTeamMembers(members.length > 0 ? members : initialTeam);
  }, []);

  const resetForm = () => {
    setFormState({
      id: '',
      name: '',
      role: '',
      bio: '',
      image: '',
      social: {
        linkedin: '',
        instagram: '',
      },
    });
    setEditingMember(null);
  };

  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (member: TeamMember) => {
    setFormState({
      ...member,
      social: {
        linkedin: member.social?.linkedin || '',
        instagram: member.social?.instagram || '',
      },
    });
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este membro da equipe?')) {
      const updatedMembers = teamMembers.filter(member => member.id !== id);
      setTeamMembers(updatedMembers);
      saveTeamMembers(updatedMembers);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      social: {
        ...prev.social,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMember = {
      ...formState,
      id: editingMember ? editingMember.id : Date.now().toString(),
    };
    
    let updatedMembers;
    
    if (editingMember) {
      updatedMembers = teamMembers.map(member => 
        member.id === editingMember.id ? newMember : member
      );
    } else {
      updatedMembers = [...teamMembers, newMember];
    }
    
    setTeamMembers(updatedMembers);
    saveTeamMembers(updatedMembers);
    setShowForm(false);
    resetForm();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Gerenciar Equipe</h1>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Novo Membro
        </button>
      </div>

      {showForm && (
        <div className="bg-dark-800 rounded-lg p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {editingMember ? 'Editar Membro' : 'Adicionar Novo Membro'}
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
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                  Cargo *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formState.role}
                  onChange={handleChange}
                  required
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
              <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">
                Biografia *
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formState.bio}
                onChange={handleChange}
                required
                rows={4}
                className="input"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formState.social?.linkedin}
                  onChange={handleSocialChange}
                  className="input"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-300 mb-2">
                  Instagram
                </label>
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  value={formState.social?.instagram}
                  onChange={handleSocialChange}
                  className="input"
                  placeholder="https://instagram.com/username"
                />
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
                {editingMember ? 'Atualizar' : 'Adicionar'} Membro
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-dark-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-dark-700">
          <h2 className="text-lg font-semibold text-white">Equipe</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {teamMembers.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-8">
              Nenhum membro encontrado
            </div>
          ) : (
            teamMembers.map((member) => (
              <div key={member.id} className="bg-dark-700 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-1">
                    <Link 
                      to="/sobre" 
                      target="_blank"
                      className="p-2 bg-dark-900/70 text-gray-300 hover:text-white rounded-full hover:bg-dark-900/90"
                      title="Visualizar"
                    >
                      <Eye size={16} />
                    </Link>
                    <button
                      onClick={() => handleEdit(member)}
                      className="p-2 bg-dark-900/70 text-gray-300 hover:text-white rounded-full hover:bg-dark-900/90"
                      title="Editar"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="p-2 bg-dark-900/70 text-gray-300 hover:text-red-500 rounded-full hover:bg-dark-900/90"
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm line-clamp-3">{member.bio}</p>
                  
                  {(member.social?.linkedin || member.social?.instagram) && (
                    <div className="mt-4 flex space-x-2">
                      {member.social?.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-600 rounded-full text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {member.social?.instagram && (
                        <a 
                          href={member.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-600 rounded-full text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamAdmin;