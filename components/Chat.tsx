"use client"

import React, { useState } from 'react';

type Message = { role: 'human' | 'assistant'; content: string };

const Chat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: 'human', content: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: data.reply },
      ]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col w-5/6 h-full justify-center items-center gap-8'>
      <div className="messages w-2/6 flex flex-col gap-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='flex flex-row w-2/6 justify-center items-center gap-2'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className='border-2 border-gray-300 rounded-md p-2 w-full'
        />
        <button type="submit" className='hover:bg-gray-300 p-2 rounded-md'>Send</button>
      </form>
    </div>
  );
};

export default Chat;