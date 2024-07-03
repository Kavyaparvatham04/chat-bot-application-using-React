import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        const response = await axios.post('http://localhost:5000/chat', { message: input });
        const botMessage = { sender: 'bot', text: response.data.response };

        setMessages([...messages, userMessage, botMessage]);
        setInput('');
    };

    return (
        <div>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                        <p><strong>{msg.sender}:</strong> {msg.text}</p>
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
