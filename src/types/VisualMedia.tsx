export interface MediaItem {
  media_id: number;
  user_id: number;
  filename: string;
  thumbnails?: {
    w160: string;
    w320: string;
    w640: string;
  };
  title: string;
  description: string;
  media_type: string;
  created_at: string;
  likesCount?: number; 
}