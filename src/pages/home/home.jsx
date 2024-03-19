import React, { useState } from "react";
import Header from "../../components/header/Header";
import BotContainer from "../../components/botContainer/BotContainer";
import SpeechToTextBtn from "../../components/speechToTextBtn/SpeechToTextBtn";
import GeneratePicsBtn from "../../components/generatePicsBtn/GeneratePicsBtn";
import ChatHistory from "../../components/chatHistory/ChatHistory";
import "../home/home.css";

function Home() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleReceiveMessage = (message) => {
    setChatHistory([...chatHistory, { type: "user", message }]);
  };

  return (
    <div className="wrapper">
      <Header className="header" />
      <div className="content">
        <BotContainer onReceiveMessage={handleReceiveMessage} />
        <SpeechToTextBtn className="speech-to-text-btn" />
        <GeneratePicsBtn className="generate-pics-container" />
        <ChatHistory
          className="chat-history"
          chatHistory={chatHistory}
        />
      </div>
    </div>
  );
}

export default Home;
