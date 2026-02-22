import type { Post } from '../types/VisualMedia';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="max-w-md mx-auto my-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <span className="font-bold text-sm text-gray-800">{post.user}</span>
      </div>
      
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {post.type === 'image' ? (
          <img src={post.url} alt={post.caption} className="w-full h-full object-cover" />
        ) : (
          <video src={post.url} controls className="w-full h-full object-cover" />
        )}
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-700">
          <span className="font-bold mr-2">{post.user}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;