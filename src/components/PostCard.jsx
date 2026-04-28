function PostCard({ post, onLike }) {
  return (
    <div>
      <p>{post.text}</p>
      <button onClick={() => onLike(post.id)}>
        ❤️ {post.likes}
      </button>
    </div>
  );
}

export default PostCard;