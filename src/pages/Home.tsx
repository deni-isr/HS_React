import { useContext } from 'react';
import { MediaContext } from '../contexts/MediaContext';
import PostCard from '../components/PostCard';

const Home = () => {
  const context = useContext(MediaContext);

  if (!context) return <p>Ladataan...</p>;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Etusivu</h2>
      {context.posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
};

export default Home;