import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "../chatHistory/ChatHistory.css";

function ChatHistory() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedHistory.slice(-8)); 
  }, []);

  return (
    <Box component="section" className="history-box">
      <Container className="history-title">
        <h6>Chat History</h6>
      </Container>
      <Stack spacing={2} className="history-items">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`history-item ${entry.type}`}>
            {entry.message}
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default ChatHistory;