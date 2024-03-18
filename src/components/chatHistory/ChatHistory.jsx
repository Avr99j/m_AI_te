import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import "../chatHistory/chatHistory.css";

function ChatHistory(props) {
  return (
    <Box component="section" className={`history-box ${props.className}`}>
      <Container className="history-title">
        <h6>Chat History</h6>
      </Container>
      <Stack spacing={2} className="history-items"></Stack>
    </Box>
  );
}

export default ChatHistory;
