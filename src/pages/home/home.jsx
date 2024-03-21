import React, { useState } from "react";
import Header from "../../components/header/header";
import BotContainer from "../../components/botContainer/botContainer";
import GeneratePics from "../../components/generatePics/GeneratePics";
import "../home/home.css";
import { Grid } from "@mui/material";

function Home() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleReceiveMessage = (message) => {
    setChatHistory([...chatHistory, { type: "user", message }]);
  };

  return (
    <Grid container className="wrapper">
      <Grid
        container
        sx={{
          justifyContent: "center",
          margin: "2em",
        }}
      >
        <Grid item>
          <Header />
          <h3 style={{ textAlign: "center", marginBottom: "1em" }}>
            Welcome to our groundbreaking platform featuring two powerful tools:
          </h3>
          <p style={{ textAlign: "center", marginBottom: "1em" }}>
            An AI Chat App and an Image Generator! Engage in dynamic conversations and
            receive personalized assistance anytime, anywhere with our intuitive AI Chat
            App.
          </p>
          <p style={{ textAlign: "center" }}>
            Unlock your creative potential with our innovative Image Generator. Transform
            your ideas into stunning visuals and imaginative artwork with ease.{" "}
          </p>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", gap: "30px", marginBottom: "2em" }}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <BotContainer
            onReceiveMessage={handleReceiveMessage}
            className="generate-chat-container"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <GeneratePics className="generate-pics-container" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
