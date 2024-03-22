import React, { useState } from "react";
import Header from "../../components/header/Heading";
import BotContainer from "../../components/botContainer/botContainer";
import GeneratePics from "../../components/generatePics/GeneratePics";
import "../home/home.css";
import Footer from "../../components/footer/footer"
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
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Home;
