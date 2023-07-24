import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Comment({ comment, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  // Check if comment is undefined
  if (!comment) {
    return null;
  }

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col className="text-center">
          <Card className="glow-card" style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "10px" }}>
            <Card.Body>
              <Button variant="success" onClick={toggleView} className="edit-button">
                Edit this Comment
              </Button>
              {viewEditForm ? (
                <CommentForm commentDetails={comment} toggleView={toggleView} handleEdit={handleEdit} />
              ) : (
                <div>
                  <h4>Comment by {comment.user_id} on post {comment.post_id}</h4>
                  <h5>
                    <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Created At: {comment.created_at}</span>
                  </h5>
                  <p>{comment.content}</p>
                </div>
              )}
              <Button variant="danger" onClick={() => handleDelete(comment.id)} className="delete-button">
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Comment;
