import React, { useState } from "react";
import PostForm from "./PostForm";
import Comments from "./Comments";
import { Button, Card, Col, Image } from "react-bootstrap";

function Post({ post, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Post text-center">
      <Card className="glow-card" style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "10px" }}>
        <Card.Body>
          <Button variant="success" onClick={toggleView} className="edit-button">
            Edit this Post
          </Button>
          <br />
          <br />
          {viewEditForm ? (
            <PostForm postDetails={post} toggleView={toggleView} handleEdit={handleEdit} />
          ) : (
            <div>
              {/* Avatar Placeholder */}
              <Col sm={4}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#e1e1e1', marginBottom: '20px' }}>
                  <Image src="path_to_avatar_image" fluid roundedCircle />
                </div>
                {/* User Data (You can use dynamic data here) */}
                <p>User Name</p>
                <p>Location</p>
              </Col>

              <Col sm={8}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <h3>Comments</h3>
                <Comments post_id={post.id} />
              </Col>
            </div>
          )}
          <Button variant="danger" onClick={() => handleDelete(post.id)} className="delete-button">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
