import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // This function would be used to call your backend API
  // const sendMessageToAPI = async (text) => {
  //   try {
      // Simulate API call with a delay
  //     const response = await new Promise((resolve) =>
  //       setTimeout(() => resolve({ data: { reply: "This is a simulated response." } }), 500)
  //     );
  //     return response.data.reply;
  //   } catch (error) {
  //     console.error('Error while sending message to API:', error);
  //     return "Sorry, I'm unable to respond at the moment.";
  //   }
  // };


  //const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const bottomOfChat = useRef(null);

  const sendMessageToAPI = async (text) => {
    
    try {
      const response = await fetch('http://localhost:5176/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error while sending message to API:', error);
      return "Sorry, I couldn't fetch the response.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Ignore empty input

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const replyText = await sendMessageToAPI(input); 
    const aiMessage = { text: replyText, sender: 'ai' };
    
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    setInput(''); // Clear the input field
  };

  // Automatically scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    bottomOfChat.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat with AI</h1>
      </header>
      <div className="chat-area">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={bottomOfChat} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;