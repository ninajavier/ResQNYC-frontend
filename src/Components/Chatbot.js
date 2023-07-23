import React from 'react'
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'


const KEY = process.env.REACT_APP_API_KEY

export default function Chatbot() {
 

    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message:"Hello",
            sender: "ChatGPT"
        }
    ]);

    const handleOnSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "User",
            direction: "outgoing"
        }
    

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setTyping(true);

    await queryChatGPT(newMessages);

    };

    async function queryChatGPT(chatMessages){
       let apiMessages =  chatMessages.map((messageObject) => {
        let role = "";
        if(messageObject.sender === "ChatGPT"){
            role="assistant"
        }else {
            role="user"
        }
        return {
            role: role, 
            content: messageObject.message
        }
       });

       const systemMessage = {
        role: "system",
        content: "Explain all concepts like I am 10 years old."
       }

       const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
            systemMessage,
            ...apiMessages
        ]
       }

       await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers: {
            "Authorization": "Bearer " + KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
       }).then((data) => {
        return data.json();
       }).then((data) => {
        console.log(data);
        setMessages(
            [...chatMessages, {
                message: data.choices[0].message.content,
                sender: "ChatGPT"
            }]
        );
        setTyping(false);
       })
    }

    return (
    
    <div>
        <h1>Chat feature</h1>
    
    <MainContainer>
        <ChatContainer>
        <MessageList 
        scrollBehavior='smooth'
        typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing"/> : null}>
        {messages.map((message, i) => {
            return <Message key={i} model={message} />
        })}
        </MessageList>
        <MessageInput placeholder='Type here' onSend={handleOnSend}/>
        </ChatContainer>
    </MainContainer>
    </div>
  )
}
