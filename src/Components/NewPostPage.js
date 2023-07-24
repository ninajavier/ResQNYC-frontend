// import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // We're using uuid to generate a unique id for the new post
import PostForm from './PostForm';
import { posts } from './MockData'; // Assuming mockData.js is in the same directory

function NewPostPage() {
  const handleAdd = (newPost) => {
    try {
      const postWithId = { ...newPost, id: uuidv4(), createdAt: new Date().toISOString() };
      posts.push(postWithId);
      alert("Post created successfully!");
    } catch (error) {
      console.error("There was an error creating the post", error);
      alert("There was an error creating the post.");
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <PostForm handleAdd={handleAdd} />
    </div>
  );
}

export default NewPostPage;
