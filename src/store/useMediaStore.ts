import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MediaItem } from '../types/VisualMedia';

interface MediaState {
  media: MediaItem[];
  loading: boolean;
  error: string | null;
  fetchMedia: () => Promise<void>;
  addPost: (newPost: any) => void; 
  handleLike: (id: number) => void;
}

const API_URL = 'https://m-alapi.vercel.app/api/v1';

export const useMediaStore = create<MediaState>()(
  persist(
    (set) => ({
      media: [],
      loading: false,
      error: null,

      fetchMedia: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${API_URL}/media`);
          if (!response.ok) throw new Error('Palvelinvirhe: Tietojen haku epäonnistui');
          
          const data = await response.json();
          set({ media: data, loading: false });
        } catch (err) {
          set({ error: (err as Error).message, loading: false });
        }
      },

      addPost: (newPost) => 
        set((state) => ({ media: [newPost, ...state.media] })),

      handleLike: (id) =>
        set((state) => ({
          media: state.media.map((item) =>
            item.media_id === id ? { ...item, likesCount: (item.likesCount || 0) + 1 } : item
          ),
        })),
    }),
    {
      name: 'media-storage',
    }
  )
);