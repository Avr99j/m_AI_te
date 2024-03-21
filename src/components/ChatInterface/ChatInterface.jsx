import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Header from "../header/Heading";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
console.log("hello");
import axios from "axios";

import ChatHistory from "../chatHistory/ChatHistory";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    const userMessage = { text: inputValue, sender: "user" };

    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/chat",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZThkMDM2NDAtYzAzYS00OTNkLWEyNDctZWNkZmFmNzJlYjg5IiwidHlwZSI6ImFwaV90b2tlbiJ9.e4S3EqZVOmOwXpJSTXjSPvShQI8SHBzj1tLi_ZkLlQ0",
      },
      data: {
        providers: "openai",
        text: inputValue,
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature: 0.0,
        max_token: 150,
        fallback_providers: "",
      },
    };

    try {
      const response = await axios.request(options);
      const aiMessage = {
        text: response.data.openai.generated_text,
        sender: "ai",
      };
      console.log(response.data);
      setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
    } catch (error) {
      console.error(error);
    }

    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };
  const handleNewChat = () => {
    setMessages([]);
    setInputValue("");
  };

  return (
    <Grid container direction="column" marginTop={2} paddingX={2}>
      <div style={{ position: "relative" }}>
        <NavLink to={"/"}>
          <HomeOutlinedIcon
            sx={{
              bgcolor: "rgb(231, 132, 48)",
              fontSize: "50px",
              padding: "5px",
              borderRadius: "4px",
              position: "absolute",
              right: "10px",
              top: "20px",
              "&:hover": {
                bgcolor: "rgb(231, 132, 48)",
                scale: "1.05",
                transition: ".2s",
              },
            }}
          />
        </NavLink>
        <Header />
      </div>

      <Grid container justifyContent="space-between">
        <Grid
          item
          overflow="auto"
          height="fit-content"
          padding={2}
          marginBottom={4}
          bgcolor="rgba(47, 47, 47, 0.328)"
          borderBottom="1px solid white"
          xs={12}
          sm={12}
          md={7}
          lg={7}
        >
          <Grid
            container
            fullwidth="true"
            sx={{
              fontSize: "30px",
              marginX: "auto",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6>How can I help you today?</h6>
            <Button
              variant="default"
              sx={{
                background: "rgb(231, 132, 48)",
                "&:hover": {
                  background: "rgb(231, 132, 48)",
                  scale: "1.05",
                  transition: ".2s",
                },
              }}
              onClick={handleNewChat}
            >
              <AddBoxOutlinedIcon />
            </Button>
          </Grid>
          <Grid item>
            {messages.map((message, index) => (
              <Grid item key={index} style={{ marginBottom: "20px" }}>
                {message.sender === "user" ? (
                  <div style={{ textAlign: "top" }}>
                    <strong style={{ color: "rgb(231, 132, 48)" }}>You</strong> <br />{" "}
                    {message.text}
                  </div>
                ) : (
                  <div style={{ textAlign: "bottom" }}>
                    <strong style={{ color: "rgb(42, 250, 255)" }}>AI</strong> <br />{" "}
                    {message.text}
                  </div>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ChatHistory />
        </Grid>
      </Grid>
      <div style={{ position: "absolute", bottom: 0, width: "90%" }}>
        <Grid
          container
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "15px",
            marginBottom: "40px",
          }}
        >
          <Grid item xs={8}>
            <TextField
              sx={{
                bgcolor: "white",
                borderRadius: "4px",
                width: "90%",
              }}
              variant="outlined"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              sx={{
                bgcolor: "rgb(231, 132, 48)",
                height: "50px",
                "&:hover": {
                  bgcolor: "rgb(231, 132, 48)",
                  scale: "1.05",
                  transition: ".2s",
                },
              }}
              fullwidth="true"
              variant="contained"
              onClick={handleSend}
            >
              <ArrowForwardOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default ChatInterface;
