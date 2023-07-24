import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { Button } from "react-bootstrap";
import { comments as mockComments } from "./MockData"; // Import mock comments

function Comments({ post_id }) {
  const [showAddComment, setShowAddComment] = useState(false);
  const [comments, setComments] = useState(mockComments); // Use the mock comments array

  const handleClick = () => {
    setShowAddComment(!showAddComment);
  };

  const handleAdd = (newComment) => {
    newComment.id = comments.length + 1; // Generate a new ID for the new comment (for mock data)
    setComments([newComment, ...comments]);
  };

  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleEdit = (updatedComment) => {
    const updatedComments = comments.map((comment) =>
      comment.id === updatedComment.id ? updatedComment : comment
    );
    setComments(updatedComments);
  };

  return (
    <div>
      <section
        className="Comments text-center"
        style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "50px" }}
      >
        <Button
          onClick={handleClick}
          variant="primary"
          style={{
            backgroundColor: "#800080",
            fontFamily: "Syne",
            boxShadow: "0px 0px 20px #800080",
            fontSize: "1.2rem",
          }}
        >
          {showAddComment ? "Hide Form" : "Add New Comment"}
        </Button>
        {showAddComment && (
          <CommentForm handleAdd={handleAdd}>
            <h5>Add a New Comment</h5>
          </CommentForm>
        )}
        {comments.map((comment) => {
          return (
            <comment key={comment.id}
              comment={comment}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Comments;
