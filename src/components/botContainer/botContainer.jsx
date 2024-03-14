import React from "react";
import "../botContainer/botContainer.css";
import chatBotImage from "../../assets/images/chatbot.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";

function BotContainer() {
  return (
    <Grid container className="container">
      <Grid item className="bot-container">
        <img src={chatBotImage} alt="chatbot image" className="bot-img" />
      </Grid>
      <Grid item className="input-container">
        <Input
          slotProps={{ input: { className: "input-field" } }}
          aria-label="User input"
          placeholder="Ask me anything..."
          className="user-input-box"
        />
        <Button className="chat-button">Chat</Button>
      </Grid>
    </Grid>
  );
}

export default BotContainer;
