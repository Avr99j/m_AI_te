import React from "react";
import Header from "../../components/header/header";
import BotContainer from "../../components/botContainer/botContainer";
import SpeechToTextBtn from "../../components/speechToTextBtn/SpeechToTextBtn";
import GeneratePicsBtn from "../../components/generatePicsBtn/GeneratePicsBtn";
import ChatHistory from "../../components/chatHistory/ChatHistory";
import "../home/home.css";

function Home() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <div className="content">
        <BotContainer className="bot-container" />
        <SpeechToTextBtn className="speech-to-text-btn" />
        <GeneratePicsBtn className="generate-pics-btn" />
        <ChatHistory className="chat-history" />
      </div>
    </div>
  );
}

export default Home;
