import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFileForm } from '../hooks/useFileForm';
import { MediaContext } from '../contexts/MediaContext';
import type { Post } from '../types/VisualMedia';

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

    const newPost: Post = {
      id: Date.now(),
      url: values.url,
      caption: values.caption,
      type: values.type,
      user: 'opiskelija_2026',
    };


    context.addPost(newPost);
    resetForm();
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Luo uusi julkaisu</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Median tyyppi:
          <select name="type" value={values.type} onChange={handleChange} style={{ padding: '8px' }}>
            <option value="image">Kuva</option>
            <option value="video">Video</option>
          </select>
        </label>

        <input
          name="url"
          type="text"
          placeholder="Kuvan tai videon URL-osoite"
          value={values.url}
          onChange={handleChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <input
          name="caption"
          type="text"
          placeholder="Kirjoita kuvateksti..."
          value={values.caption}
          onChange={handleChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <button type="submit" style={{ padding: '12px', background: '#0095f6', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          Julkaise
        </button>
      </form>
    </div>
  );
};

export default Upload;