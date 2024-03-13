import React from "react";
import "../botContainer/botContainer.css";
import chatBotImage from "../../assets/images/chatbot.png";

function BotContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="img-container">
          <img src={chatBotImage} alt="chatbot image" id="chatbot-img" />
        </div>
      </div>
    </div>
  );
}

export default BotContainer;
