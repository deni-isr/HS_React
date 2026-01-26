import type { Post } from '../types/VisualMedia';
import PostCard from '../components/PostCard';

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Shorts</h2>
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
};

export default Home;