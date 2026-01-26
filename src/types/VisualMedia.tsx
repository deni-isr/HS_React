export interface Post {
  id: number;
  type: 'image' | 'video';
  url: string;
  user: string;
  caption: string;
}