import { useMediaStore } from '../store/useMediaStore';
import type { MediaItem } from '../types/VisualMedia';

const PostCard = ({ post }: { post: any }) => { 
  const handleLike = useMediaStore((state) => state.handleLike);

  const isVideo = post.media_type?.includes('video') || post.type === 'video';
  const displayUrl = post.filename 
    ? `https://m-alapi.vercel.app/uploads/${post.filename}` 
    : post.url;

  return (
    <div className="max-w-md mx-auto my-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 font-bold text-sm text-gray-800">
        {post.user || `Käyttäjä ${post.user_id}`}
      </div>
      
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {isVideo ? (
          <video src={displayUrl} controls className="w-full h-full object-cover" />
        ) : (
          <img src={displayUrl} className="w-full h-full object-cover" alt={post.title || post.caption} />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button 
            onClick={() => handleLike(post.media_id || post.id)}
            className="hover:scale-125 transition-transform duration-200 active:scale-90"
          >
            <span className="text-2xl text-red-500">❤️</span>
          </button>
          <span className="font-bold text-sm">
            {(post.likesCount || post.likes || 0)} tykkäystä
          </span>
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-bold mr-2">{post.user || `Käyttäjä ${post.user_id}`}</span>
          {post.title || post.caption || post.description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;