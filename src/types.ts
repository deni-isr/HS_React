export interface MediaItem {
  id: number;
  title: string;
  url: string;
  type: 'image' | 'video' | 'audio';
  user: string;
}