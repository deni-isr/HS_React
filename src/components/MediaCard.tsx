import type { MediaItem } from '../types';

interface Props {
  item: MediaItem;
}

const MediaCard = ({ item }: Props) => {
  return (
    <div style={{ 
      border: '1px solid #dbdbdb', 
      margin: '20px auto', 
      maxWidth: '450px', 
      borderRadius: '8px',
      backgroundColor: '#fff',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '10px', fontWeight: 'bold' }}>@{item.user}</div>
      
      {item.type === 'video' ? (
        <video 
          src={item.url} 
          controls 
          style={{ width: '100%', display: 'block' }} 
        />
      ) : (
        <img 
          src={item.url} 
          alt={item.title} 
          style={{ width: '100%', display: 'block' }} 
        />
      )}

      <div style={{ padding: '12px' }}>
        <p style={{ margin: 0 }}>
          <strong>{item.user}</strong> {item.title}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;