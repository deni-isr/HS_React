import { useNavigate } from 'react-router-dom';
import { useMediaStore } from '../store/useMediaStore';
import { useFileForm } from '../hooks/useFileForm';

const Upload = () => {
  const navigate = useNavigate();
  const addPost = useMediaStore((state) => state.addPost);
  
  const { values, handleChange, resetForm } = useFileForm({
    url: '',
    caption: '',
    type: 'image' as 'image' | 'video'
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addPost({
      id: Date.now(),
      url: values.url,
      caption: values.caption,
      type: values.type,
      user: 'deni_user',
      likes: 0,
    });

    resetForm();
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Uusi julkaisu</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {values.url && (
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
            {values.type === 'image' ? (
              <img src={values.url} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <video src={values.url} className="w-full h-full object-cover" />
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-600">Tyyppi</label>
          <select name="type" value={values.type} onChange={handleChange} className="p-3 rounded-lg border border-gray-300">
            <option value="image">Kuva</option>
            <option value="video">Video</option>
          </select>
        </div>

        <input
          name="url"
          type="text"
          placeholder="Media URL"
          value={values.url}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="caption"
          type="text"
          placeholder="Kuvateksti..."
          value={values.caption}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-all">
          Julkaise
        </button>
      </form>
    </div>
  );
};

export default Upload;