import React from "react";
import "../botContainer/botContainer.css";
import chatBotImage from "../../assets/images/chatbot.png";
import Grid from "@mui/material/Grid";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function BotContainer() {
  return (
    <Grid container justifyContent="center" margin="auto" className="container">
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
        <Button className="chat-button">
          <KeyboardArrowRightOutlinedIcon fontSize="large" className="arrow" />
        </Button>
      </Grid>
    </Grid>
  );
}

export default BotContainer;
