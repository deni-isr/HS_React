import { create } from 'zustand';
import type { MediaItem } from '../types/VisualMedia';

interface MediaState {
  media: MediaItem[];
  loading: boolean;
  error: string | null;
  fetchMedia: () => Promise<void>;
}

const API_URL = 'https://m-alapi.vercel.app/api/v1';

export const useMediaStore = create<MediaState>((set) => ({
  media: [],
  loading: false,
  error: null,

  fetchMedia: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${API_URL}/media`);
      if (!response.ok) throw new Error('Failed to fetch media');
      
      const data = await response.json();
      set({ media: data, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));