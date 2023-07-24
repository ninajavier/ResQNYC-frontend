import React from "react";
import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Container } from "react-bootstrap"; // Import Container from React Bootstrap

console.log(MainContainer);
const KEY = process.env.REACT_APP_API_URL;
console.log(KEY);

export default function Chatbot() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "ResQ Bot works offline if you're caught in a Crisis--", 
      sender: "ChatGPT",
    },
  ]);

  const handleOnSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "User",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setTyping(true);

    await queryChatGPT(newMessages);
  };

  async function queryChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return {
        role: role,
        content: messageObject.message,
      };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I am 10 years old.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <Container fluid>
    <div>
      <h1>ResQ Bot</h1>

        <MainContainer className="main-containter">
          <ChatContainer className="chat-containter rounded ">
            <MessageList
              style={{ maxHeight: "500px", overflowY: "auto" }}
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput clplaceholder="Type here" onSend={handleOnSend} />
          </ChatContainer>
        </MainContainer>
    </div>
  </Container>
);
}