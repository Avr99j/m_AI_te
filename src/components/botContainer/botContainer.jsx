import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../botContainer/botContainer.css";
import chatBotImage from "../../assets/images/chatbot.png";
import { Button, Grid, TextField } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

function BotContainer() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("chatHistory"));
    if (storedHistory) {
      setChatHistory(storedHistory);
    }
  }, []); // Empty dependency array to run the effect only once

  const handleSendMessage = (message) => {
    const updatedHistory = [...chatHistory, { type: "user", message }];
    localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
    setChatHistory(updatedHistory);
  };

  const handleSearch = (query) => {
    handleSendMessage(query);
  };

  return (
    <Grid
      container
      className="bot-container"
      sx={{
        justifyContent: "space-around",
        gap: "10px",
      }}
    >
      <img src={chatBotImage} alt="chatbot image" className="bot-img" />

      <Grid item xs={8} sm={8} md={8} lg={8}>
        <TextField
          sx={{
            bgcolor: "white",
            borderRadius: "4px",
            width: "100%",
          }}
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <NavLink to="chatInterface">
          <Button
            sx={{
              bgcolor: "rgb(231, 132, 48)",
              marginTop: "6px",
              width: "20%",
              "&:hover": {
                bgcolor: "rgb(231, 132, 48)",
              },
            }}
            variant="contained"
            onClick={() => {
              const message = document.querySelector('input[type="text"]').value;
              handleSearch(message);
              document.querySelector('input[type="text"]').value = "";
            }}
          >
            <ArrowForwardOutlinedIcon />
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default BotContainer;
