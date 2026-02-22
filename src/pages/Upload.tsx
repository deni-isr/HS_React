import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFileForm } from '../hooks/useFileForm';
import { MediaContext } from '../contexts/MediaContext';

const Upload = () => {
  const navigate = useNavigate();
  const context = useContext(MediaContext);
  
  const { values, handleChange, resetForm } = useFileForm({
    url: '',
    caption: '',
    type: 'image' as 'image' | 'video'
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!context) return;

    context.addPost({
      id: Date.now(),
      url: values.url,
      caption: values.caption,
      type: values.type,
      user: 'oma_kayttaja',
      likes: 0
    });

    resetForm();
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Uusi julkaisu</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {values.url && (
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-50 border-2 border-dashed border-gray-200">
            {values.type === 'image' ? (
              <img src={values.url} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <video src={values.url} className="w-full h-full object-cover" />
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">Median tyyppi</label>
          <select 
            name="type" 
            value={values.type} 
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="image">📸 Kuva</option>
            <option value="video">🎥 Video</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">Media URL</label>
          <input
            name="url"
            type="text"
            placeholder="Liitä kuvan tai videon linkki..."
            value={values.url}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">Kuvateksti</label>
          <input
            name="caption"
            type="text"
            placeholder="Kirjoita jotain..."
            value={values.caption}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-95"
        >
          Jaa postaus
        </button>
      </form>
    </div>
  );
};

export default Upload;