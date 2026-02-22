import { useContext } from 'react';
import { MediaContext } from '../contexts/MediaContext';
import type { Post } from '../types/VisualMedia';

const PostCard = ({ post }: { post: Post }) => {
  const context = useContext(MediaContext);

  return (
    <div className="max-w-md mx-auto my-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 font-bold text-sm">{post.user}</div>
      
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {post.type === 'image' ? (
          <img src={post.url} className="w-full h-full object-cover" alt="" />
        ) : (
          <video src={post.url} controls className="w-full h-full object-cover" />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 mb-2">
          <button 
            onClick={() => context?.handleLike(post.id)}
            className="hover:scale-110 transition-transform text-2xl"
          >
            ❤️
          </button>
          <span className="font-bold text-sm">{post.likes} tykkäystä</span>
        </div>
        
        <p className="text-sm">
          <span className="font-bold mr-2">{post.user}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;