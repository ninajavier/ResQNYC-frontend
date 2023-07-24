import React, { useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { posts as mockPosts } from "./MockData";

function Posts() {
  const [showAddPost, setShowAddPost] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowAddPost(!showAddPost);
  };

  const handleAdd = (newPost) => {
    newPost.id = posts.length + 1; // Generate a new ID for the new post (for mock data)
    setPosts([newPost, ...posts]);
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleEdit = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    navigate(0);
  };

  return (
    <Container className="py-4"> {/* Added padding under the navbar */}
      <Button
        onClick={handleClick}
        variant="primary"
        style={{
          backgroundColor: "#C6D8D3",
          fontFamily: "Soulway Demo",
          boxShadow: "0px 0px 20px #800080",
          fontSize: "1.2rem",
        }}
      >
        {showAddPost ? "Hide Form" : "Add New Post"}
      </Button>
      {showAddPost && (
        <PostForm handleAdd={handleAdd}>
          <h5>Add a New Post</h5>
        </PostForm>
      )}
      <div className="posts-container d-flex flex-wrap justify-content-center"> {/* Centering the posts */}
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </Container>
  );
}

export default Posts;
