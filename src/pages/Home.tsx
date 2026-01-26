import React from 'react';
import { Post } from '../types/VisualMedia';
import PostCard from '../components/PostCard';

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Feed</h2>
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
};

export default Home;