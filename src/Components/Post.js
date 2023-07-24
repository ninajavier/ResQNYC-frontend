import React, { useState } from "react";
import PostForm from "./PostForm";
import { Button, Card, Col, Image } from "react-bootstrap";
import { users as mockUsers } from "./MockData"; // Import the users data from MockData

function Post({ post, handleDelete, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  // Find the corresponding user based on the post's userId
  const user = mockUsers.find((user) => user.id === post.userId);

  // Generate a unique seed for each user based on their userId
  const seed = `user-${user.id}`;

  return (
    <div className="Post text-center">
      <Card className="glow-card" style={{ maxWidth: "1000px", margin: "0 auto", paddingTop: "10px" }}>
        <Card.Body>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Avatar Placeholder */}
            <Col sm={4}>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: '#e1e1e1', marginBottom: '20px', marginRight: '100px' }}>
                <Image src={`https://avatars.dicebear.com/v2/avataaars/${seed}.svg`} fluid roundedCircle />
              </div>
              {/* User Data (You can use dynamic data here) */}
              <h1>{user ? user.name : "User Name"}</h1>
              <h6>{user ? user.location : "Location"}</h6>
            </Col>

            <Col sm={8} style={{ textAlign: "center" }}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </Col>
          </div>
          <Button variant="success" onClick={toggleView} className="edit-button"
           style={{
            backgroundColor: "#C6D8D3",
            fontFamily: "Soulway Demo",
            boxShadow: "0px 0px 20px #800080",
            fontSize: "1.2rem",
          }}>
            Edit this Post
          </Button>
          <Button variant="danger" onClick={() => handleDelete(post.id)} className="delete-button"
           style={{
            margin:"10px",
            backgroundColor: "#C6D8D3",
            fontFamily: "Soulway Demo",
            boxShadow: "0px 0px 20px #800080",
            fontSize: "1.2rem",
          }}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
