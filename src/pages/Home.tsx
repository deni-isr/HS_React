import { useMediaStore } from '../store/useMediaStore';
import PostCard from '../components/PostCard';

const Home = () => {
  const posts = useMediaStore((state) => state.posts);

  return (
    <div className="container mx-auto">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;