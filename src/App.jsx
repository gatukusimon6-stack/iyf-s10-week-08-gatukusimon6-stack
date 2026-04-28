import { useState, useEffect } from "react";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      text,
      likes: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (id) => {
    const updated = posts.map((post) =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    );
    setPosts(updated);
  };

  return (
    <div>
      <h1>CommunityHub</h1>
      <AddPost onAdd={addPost} />
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}

export default App;