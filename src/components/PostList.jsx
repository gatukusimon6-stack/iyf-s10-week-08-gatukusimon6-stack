import PostCard from "./PostCard";

function PostList({ posts, onLike }) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}

export default PostList;