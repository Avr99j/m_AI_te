import React, { useState } from "react";
import Header from "../../components/header/Heading";
import BotContainer from "../../components/botContainer/botContainer";
import SpeechToTextBtn from "../../components/speechToTextBtn/SpeechToTextBtn";
import GeneratePics from "../../components/generatePics/GeneratePics";
import ChatHistory from "../../components/chatHistory/ChatHistory";
import "../home/home.css";
import footer from "../../components/footer/footer"

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
        {/* <SpeechToTextBtn className="speech-to-text-btn" /> */}
        <GeneratePics className="generate-pics-container" />
        {/* <ChatHistory className="chat-history" chatHistory={chatHistory} /> */}
      </div>
      <footer />
    </div>
  );
}

export default Home;
