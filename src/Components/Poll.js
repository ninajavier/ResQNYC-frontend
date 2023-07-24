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
      <h2>How Prepared is Your Household for a natural disaster?</h2>
      <ListGroup>
        {options.map((option) => (
          <ListGroup.Item
            key={option.id}
            className="mt-1"
            style={{ backgroundColor: "#C6D8D3", color: "#331882" }}
          >
            {option.text}
            <Button
              onClick={() => handleVote(option.id)}
              style={{ backgroundColor: "#331882" }}
              className="ml-2"
            >
              Vote
            </Button>
            <span style={{ color: "#F0544F" }}>Votes: {option.votes}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Poll;
