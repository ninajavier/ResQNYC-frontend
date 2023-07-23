import React from 'react'
import { useState } from 'react';

export default function PostInput() {

  
        const [user, setUser] = useState('');
        const [comment, setComment] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // You can handle the submission logic here
          console.log('User:', user);
          console.log('Comment:', comment);
      
          // Clear the form fields after submission
          setUser('');
          setComment('');
        };


  return (
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
            required
          />
        </div>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  )
}
