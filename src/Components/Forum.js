import React from 'react';
import { Container,  } from 'react-bootstrap';
import Posts from './Posts'; // Import Posts component

const Forum = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>This is The Forum</h1>
            <Posts />
      </div>
    </Container>
  )
}

export default Forum;
