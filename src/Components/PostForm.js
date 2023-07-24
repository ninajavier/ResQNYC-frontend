import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function PostForm(props) {
  const { id } = useParams();
  const { postDetails } = props;

  const [post, setPost] = useState({
    title: "",
    content: "",
    user_id: id,
  });

  useEffect(() => {
    if (postDetails) {
      setPost(postDetails);
    }
  }, [id, postDetails, props]);

  const handleTextChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.handleAdd) {
      props.handleAdd(post);
    } else if (props.handleEdit) {
      props.handleEdit(post);
    }
    setPost({
      title: "",
      content: "",
      user_id: id,
    });
  };

  return (
    <Container className="Edit">
      {props.children}
      <Row className="justify-content-center">
        <Col sm={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                required
                value={post.title}
                placeholder="Post Title"
                onChange={handleTextChange}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content:</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={post.content}
                placeholder="What's on your mind..."
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
        </Col>
      </Row>
    </Container>
  );
}

export default PostForm;
