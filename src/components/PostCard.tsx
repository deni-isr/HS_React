import { useMediaStore } from '../store/useMediaStore';
import type { Post } from '../types/VisualMedia';

const PostCard = ({ post }: { post: Post }) => {
  const handleLike = useMediaStore((state) => state.handleLike);

  return (
    <div className="max-w-md mx-auto my-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 font-bold text-sm text-gray-800">{post.user}</div>
      
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {post.type === 'image' ? (
          <img src={post.url} className="w-full h-full object-cover" alt={post.caption} />
        ) : (
          <video src={post.url} controls className="w-full h-full object-cover" />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button 
            onClick={() => handleLike(post.id)}
            className="hover:scale-125 transition-transform duration-200 active:scale-90"
          >
            <span className="text-2xl text-red-500">❤️</span>
          </button>
          <span className="font-bold text-sm">{post.likes} tykkäystä</span>
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-bold mr-2">{post.user}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;