import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Post } from '../types/VisualMedia';

interface MediaContextType {
  posts: Post[];
  addPost: (newPost: Post) => void;
}

export const MediaContext = createContext<MediaContextType | null>(null);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      user: 'opiskelija_dev',
      caption: 'Testivideo koulun projektia varten'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://picsum.photos/450/450',
      user: 'kuvaaja_pro',
      caption: 'Hieno maisema'
    }
  ]);

  const addPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <MediaContext.Provider value={{ posts, addPost }}>
      {children}
    </MediaContext.Provider>
  );
};