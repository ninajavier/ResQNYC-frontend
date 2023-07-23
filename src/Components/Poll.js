import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

function Poll() {
  const [options, setOptions] = useState([
    {
      id: 1,
      text: "Yes, I have an emergency kit and a well-thought-out plan.",
      votes: 3574,
    },
    {
      id: 2,
      text: "Somewhat, I have some supplies but need more guidance on preparedness.",
      votes: 756,
    },
  ]);

  const handleVote = (optionId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      )
    );
  };

  return (
    <div>
      <h3>Poll Question</h3>
      <ListGroup>
        {options.map((option) => (
          <ListGroup.Item key={option.id}>
            {option.text}
            <Button onClick={() => handleVote(option.id)}>Vote</Button>
            <span>Votes: {option.votes}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default Poll;
