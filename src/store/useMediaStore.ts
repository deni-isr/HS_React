import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Post } from '../types/VisualMedia';

interface MediaState {
  posts: Post[];
  addPost: (newPost: Post) => void;
  handleLike: (id: number) => void;
}

export const useMediaStore = create<MediaState>()(
  persist(
    (set) => ({
      posts: [
        {
          id: 1,
          type: 'image',
          url: 'https://picsum.photos/450/450',
          user: 'deni_zustand',
          caption: 'Nyt käytössä Zustand!',
          likes: 0
        }
      ],
      addPost: (newPost) => 
        set((state) => ({ posts: [newPost, ...state.posts] })),
      handleLike: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
          ),
        })),
    }),
    {
      name: 'media-storage',
    }
  )
);