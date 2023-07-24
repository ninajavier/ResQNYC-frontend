import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function CommentForm(props) {
  const { id } = useParams();
  const { commentDetails } = props;

  const [comment, setComment] = useState({
    user_id: "",
    post_id: id,
    content: "",
  });

  useEffect(() => {
    if (commentDetails) {
      setComment(commentDetails);
    }
  }, [id, commentDetails, props]);

  const handleTextChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.handleAdd) {
      props.handleAdd(comment);
    } else if (props.handleEdit) {
      props.handleEdit(comment);
    }
    setComment({
      user_id: "",
      post_id: id,
      content: "",
    });
  };

  return (
    <div className="Edit text-center">
      {props.children}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="user_id">
          <Form.Label>User ID:</Form.Label>
          <Form.Control
            value={comment.user_id}
            type="text"
            onChange={handleTextChange}
            placeholder="Your User ID"
            required
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={comment.content}
            placeholder="Your comment..."
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <br />

        <Button
          type="submit"
          variant="primary"
          style={{
            backgroundColor: "#FFA500",
            color: "white",
            fontFamily: "Syne",
            animation: "glowing 1.5s infinite",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CommentForm;
