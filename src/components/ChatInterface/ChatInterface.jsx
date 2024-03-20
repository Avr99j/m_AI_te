import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Header from "../header/Header";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import axios from 'axios';


function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    const userMessage = { text: inputValue, sender: 'user' };

    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/chat",
      headers: {
        
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZThkMDM2NDAtYzAzYS00OTNkLWEyNDctZWNkZmFmNzJlYjg5IiwidHlwZSI6ImFwaV90b2tlbiJ9.e4S3EqZVOmOwXpJSTXjSPvShQI8SHBzj1tLi_ZkLlQ0",
      },
      data: {
        providers: "openai",
        text: inputValue,
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

   // setInput(''); // Clear input field
    setInputValue("");
  };

/*
  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Code to send message to AI backend and receive response

    const responseData = { text: "Response from AI" }; // Mock response for now
    setMessages([
      ...messages,
      { text: inputValue, sender: "user" },
      { text: responseData.text, sender: "ai" },
    ]);
    setInputValue("");
  };
*/

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
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
              left: "10px",
              top: "20px",
            }}
          />
        </NavLink>
        <Header />
      </div>

      <div style={{ position: "relative" }}>
        <Grid
          container
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "15px",
            marginBottom: "15px",
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
                },
              }}
              fullWidth
              variant="contained"
              onClick={handleSend}
            >
              <ArrowForwardOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        overflow="auto"
        bgcolor="rgb(48, 48, 48)"
        height="70vh"
        borderRadius={1}
        padding={2}
      >
        <Grid item>
          {messages.map((message, index) => (
            <Grid item key={index} xs={12} style={{ marginBottom: "20px" }}>
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
    </Grid>
  );
}

export default ChatInterface;
