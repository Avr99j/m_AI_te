import React from "react";
import "../botContainer/BotContainer.css";
import chatBotImage from "../../assets/images/chatbot.png";
import Grid from "@mui/material/Grid";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

function BotContainer() {
  return (
    <Grid container justifyContent="center" gap={3} className="bot-container">
      <img src={chatBotImage} alt="chatbot image" className="bot-img" />

      <Grid item xs={8} sm={8} md={8} lg={8} className="input-container">
        <Input
          slotProps={{ input: { className: "input-field" } }}
          aria-label="User input"
          placeholder="Ask me anything..."
          className="user-input-box"
        />
        <Button className="chat-button">
          <ArrowForwardOutlinedIcon fontSize="large" className="arrow" />
        </Button>
      </Grid>
    </Grid>
  );
}

export default BotContainer;
