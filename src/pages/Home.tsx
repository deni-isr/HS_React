import { useEffect } from 'react';
import { useMediaStore } from '../store/useMediaStore';
import PostCard from '../components/PostCard';

const Home = () => {
  const { media, loading, error, fetchMedia } = useMediaStore();

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  if (loading) return <div className="text-center mt-10 text-xl font-bold">Louding ⏳</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="flex flex-col gap-6">
        {media.map((item) => (
          <PostCard 
            key={item.media_id} 
            post={{
              id: item.media_id,
              type: item.media_type.includes('video') ? 'video' : 'image',
              url: `https://m-alapi.vercel.app/uploads/${item.filename}`,
              user: `User ${item.user_id}`,
              caption: item.title,
              likes: 0
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;