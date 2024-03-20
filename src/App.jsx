// import React, { useState } from 'react';
// import './App.css';

// Mock function to simulate fetching a response from the back-end
// const fetchReply = async (message) => {
//   return `Echo: ${message}`;
// };
// Simulate fetching a response from the back-end with some basic AI-like logic
// const fetchReply = async (message) => {
// Simulating a delay to mimic an API call
// await new Promise((resolve) => setTimeout(resolve, 500));

// Convert the message to lowercase to simplify matching
// const lowerCaseMessage = message.toLowerCase();

// Return responses based on certain keywords
//   if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
//     return "Hello there! How can I assist you today?";
//   } else if (lowerCaseMessage.includes("name")) {
//     return "I am a demo chatbot created to show basic interaction. What's your name?";
//   } else if (lowerCaseMessage.includes("how are you")) {
//     return "I'm just a program, so I don't have feelings, but thanks for asking!";
//   } else {
//     return "Sorry, I'm not programmed to understand that. Could you try asking something else?";
//   }
// };

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = async () => {
//     const userMessage = { text: input, sender: 'user' };
//     const aiResponse = await fetchReply(input);
//     const aiMessage = { text: aiResponse, sender: 'ai' };

//     setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
//     setInput(''); // Clear input field
// };

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Chat with AI</p>
//       </header>
//       <div className="chat-area">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         onKeyPress={handleKeyPress}
//         placeholder="Type a message..."
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// }

// export default App;







import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const userMessage = { text: input, sender: 'user' };

    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/chat",
      headers: {
        
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZThkMDM2NDAtYzAzYS00OTNkLWEyNDctZWNkZmFmNzJlYjg5IiwidHlwZSI6ImFwaV90b2tlbiJ9.e4S3EqZVOmOwXpJSTXjSPvShQI8SHBzj1tLi_ZkLlQ0",
      },
      data: {
        providers: "openai",
        text: input,
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature: 0.0,
        max_token: 150,
        fallback_providers: "",
      }
    };


    try {
      const response = await axios.request(options);
           const aiMessage = { text: response.data.openai.generated_text, sender: 'ai' }; 
      console.log (response.data)
      setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
    } catch (error) {
      console.error(error);
    }

    setInput(''); // Clear input field
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Chat with AI</p>
      </header>
      <div className="chat-area">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
