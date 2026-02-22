import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Post } from '../types/VisualMedia';

interface MediaContextType {
  posts: Post[];
  addPost: (newPost: Post) => void;
  handleLike: (id: number) => void;
}

export const MediaContext = createContext<MediaContextType | null>(null);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      type: 'image',
      url: 'https://picsum.photos/450/450',
      user: 'deni_dev',
      caption: 'Testing likes!',
      likes: 5
    }
  ]);

  const addPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  const handleLike = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <MediaContext.Provider value={{ posts, addPost, handleLike }}>
      {children}
    </MediaContext.Provider>
  );
};