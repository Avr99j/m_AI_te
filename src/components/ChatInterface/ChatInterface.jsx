import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Header from "../header/header";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatHistory from "../chatHistory/ChatHistory";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Code to send message to AI backend and receive response

    const responseData = { text: "Response from ai" };
    setMessages([
      ...messages,
      { text: inputValue, sender: "user" },
      { text: responseData.text, sender: "ai" },
    ]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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

      <div style={{ position: "relative" }}>
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
              fullWidth
              variant="contained"
              onClick={sendMessage}
            >
              <ArrowForwardOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
      <Grid container>
        <Grid
          item
          overflow="auto"
          height="100vh"
          padding={2}
          bgcolor="rgb(47, 47, 47)"
          border="2px solid rgb(34, 34, 34);
"
          xs={12}
          sm={12}
          md={8}
          lg={8}
        >
          <Grid
            container
            fullWidth
            sx={{
              fontSize: "30px",
              padding: ".5em",
              borderBottom: "1px solid rgb(42, 250, 255) ",
              marginX: "auto",
              marginBottom: "1em",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6>How can I help you today?</h6>
            <Button
              variant="default"
              sx={{
                textTransform: "inherit",
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
    </Grid>
  );
}

export default ChatInterface;
