import type { Post } from '../types/VisualMedia';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div style={{ border: '1px solid #dbdbdb', margin: '20px auto', maxWidth: '450px', borderRadius: '8px' }}>
      <div style={{ padding: '10px', fontWeight: 'bold' }}>@{post.user}</div>
      
      {post.type === 'video' ? (
        <video src={post.url} controls style={{ width: '100%' }} />
      ) : (
        <img src={post.url} alt={post.caption} style={{ width: '100%' }} />
      )}

      <div style={{ padding: '10px' }}>
        <p><strong>{post.user}</strong> {post.caption}</p>
      </div>
    </div>
  );
};

export default PostCard;