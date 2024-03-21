import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../botContainer/botContainer.css";
import { Button, Grid, TextField } from "@mui/material";

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
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className="chat-image"
        sx={{
          height: "70vh",
          borderRadius: "5px",
          border: ".5px solid rgb(231, 132, 48)",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "end",
            flexDirection: "column",
            gap: "3em",
            height: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              background: "rgba(28, 28, 28, 0.75)",
              padding: "2em",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            <Grid item>
              Whether you're seeking advice, looking for information, or simply want to
              chat, our AI is here to assist you.
            </Grid>
            <Grid item>
              <Button
                sx={{
                  background: "rgb(231, 132, 48)",
                  color: "white",
                  marginTop: "1em",
                  "&:hover": {
                    bgcolor: "rgb(231, 132, 48)",
                    scale: "1.05",
                    transition: ".2s",
                  },
                }}
              >
                <NavLink style={{ textDecoration: "none" }} to="ChatInterface">
                  Chat AI
                </NavLink>
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );

  // return (
  //   <Grid
  //     container
  //     className="bot-container"
  //     sx={{
  //       justifyContent: "space-around",
  //       gap: "10px",
  //     }}
  //   >
  //     <img src={chatBotImage} alt="chatbot image" className="bot-img" />

  //     <Grid item xs={8} sm={8} md={8} lg={8}>
  //       <TextField
  //         sx={{
  //           bgcolor: "white",
  //           borderRadius: "4px",
  //           width: "100%",
  //         }}
  //         fullWidth
  //         variant="outlined"
  //         placeholder="Type your message..."
  //         onKeyDown={(e) => {
  //           if (e.key === "Enter") {
  //             handleSearch(e.target.value);
  //             e.target.value = "";
  //           }
  //         }}
  //       />
  //       <NavLink to="chatInterface">
  //         <Button
  //           sx={{
  //             bgcolor: "rgb(231, 132, 48)",
  //             marginTop: "6px",
  //             width: "20%",
  //             "&:hover": {
  //               bgcolor: "rgb(231, 132, 48)",
  //             },
  //           }}
  //           variant="contained"
  //           onClick={() => {
  //             const message = document.querySelector('input[type="text"]').value;
  //             handleSearch(message);
  //             document.querySelector('input[type="text"]').value = "";
  //           }}
  //         >
  //           <ArrowForwardOutlinedIcon />
  //         </Button>
  //       </NavLink>
  //     </Grid>
  //   </Grid>
  // );
}

export default BotContainer;
