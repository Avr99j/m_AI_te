import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "../chatHistory/ChatHistory.css";
import { TextField, Button, Grid } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function ChatHistory() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedHistory.slice(-8));
  }, []);

  const handleDeleteHistory = () => {
    localStorage.removeItem("chatHistory");
    setChatHistory([]);
  };

  return (
    <Box component="section" className="history-box">
      <Container className="history-title" sx={{ position: "relative" }}>
        <h6>Chat History</h6>
        <Button
          sx={{
            background: "rgb(231, 132, 48)",
            marginLeft: "2em",
            borderRadius: "5px",
            position: "absolute",
            right: "0",
            marginRight: "8px",
            "&:hover": {
              background: "rgb(231, 132, 48)",
              scale: "1.05",
              transition: ".2s",
            },
          }}
          onClick={handleDeleteHistory}
        >
          <DeleteOutlineOutlinedIcon />
        </Button>
      </Container>
      <Stack spacing={2} className="history-items">
        {chatHistory.map((entry, index) => (
          <Button
            key={index}
            className={`history-item ${entry.type}`}
            sx={{
              background: "rgb(55, 55, 55)",
              width: "100%",
              justifyContent: "flex-start",
              padding: "4px 10px",
              border: "none",
              borderRadius: "5px",
              color: "white",
              "&:hover": {
                bgcolor: "rgb(34, 34, 34)",
              },
            }}
          >
            {entry.message}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

export default ChatHistory;
