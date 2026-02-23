import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Post } from '../types/VisualMedia';

interface MediaContextType {
  posts: Post[];
  addPost: (newPost: Post) => void;
  handleLike: (id: number) => void;
}

export const MediaContext = createContext<MediaContextType | null>(null);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = localStorage.getItem('my_app_posts');
    return savedPosts ? JSON.parse(savedPosts) : [
      {
        id: 1,
        type: 'image',
        url: 'https://picsum.photos/450/450',
        user: 'de_dev',
        caption: 'Tervetuloa sovellukseen!',
        likes: 0
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('my_app_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost: Post) => {
    setPosts((prev) => [newPost, ...prev]);
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