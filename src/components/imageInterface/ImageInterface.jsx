import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Header from "../header/Heading";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import axios from "../axiosConfig/axiosConfig";
import ReactPlayer from "react-player";
import LinearProgressWithLabelI from "../LinearProgress/LinearProgress";
import LinearProgressWithLabelM from "../LinearProgress/LinerProgressM";

const audio = new Audio("src/assets/sound.mp3");
let ImgId = "";

function ImageInterface() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingM, setLoadingM] = useState(false);
  const [motionUrl, setMotionUrl] = useState("");

  const generateImage = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/generations", {
        prompt: prompt,
        height: 512,
        modelId: "",
        width: 512,
        alchemy: true,
        photoReal: true,
        photoRealStrength: 0.5,
        presetStyle: "CINEMATIC",
      });
      console.log(response);
      const generationId = response.data.sdGenerationJob.generationId;
      console.log(generationId);
      setTimeout(async () => {
        try {
          const imageResponse = await axios.get(`/generations/${generationId}`);
          const generatedImages =
            imageResponse.data.generations_by_pk.generated_images[0].url;
          ImgId = imageResponse.data.generations_by_pk.generated_images[0].id;
          console.log(generatedImages);
          console.log(ImgId);
          setImageUrl(generatedImages);
        } catch (error) {
          console.error("Error fetching image URLs:", error);
        } finally {
          setLoading(false);
        }
      }, 28000);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const generateMotion = async () => {
    try {
      setLoadingM(true);
      const motionResponse = await axios.post("/generations-motion-svd", {
        imageId: ImgId,
        motionStrength: 3,
      });

      audio.play();
      console.log(audio);
      const motionGenerationId = motionResponse.data.motionSvdGenerationJob.generationId;

      setTimeout(async () => {
        try {
          const motionImageResponse = await axios.get(
            `/generations/${motionGenerationId}`
          );
          const generatedMotion =
            motionImageResponse.data.generations_by_pk.generated_images[0].motionMP4URL;
          setMotionUrl(generatedMotion);
        } catch (error) {
          console.error("Error fetching motion URLs:", error);
        } finally {
          setLoadingM(false);
        }
      }, 80000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error generating motion:", error);
    }
  };
  return (
    <Grid container direction="column" marginTop={2} paddingX={2}>
      <div style={{ position: "relative" }}>
        <NavLink to={"/chatInterface"}>
          <ChatOutlinedIcon
            sx={{
              fontSize: "50px",
              padding: "5px",
              border: "1px solid rgb(32, 232, 246)",
              borderRadius: "4px",
              position: "absolute",
              right: "10px",
              top: "20px",
              "&:hover": {
                bgcolor: "black",
                scale: "1.05",
                transition: ".2s",
              },
            }}
          />
        </NavLink>
        <NavLink to={"/"}>
          <HomeOutlinedIcon
            sx={{
              fontSize: "50px",
              padding: "5px",
              border: "1px solid rgb(32, 232, 246)",
              borderRadius: "4px",
              position: "absolute",
              right: "75px",
              top: "20px",
              "&:hover": {
                bgcolor: "black",
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
              placeholder="Enter a prompt to generate..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
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
              onClick={generateImage}
            >
              <ArrowForwardOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </div>

      <Grid container justifyContent="space-between" gap={2}>
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          // overflow="auto"
          justifyContent="center"
          bgcolor="transparent"
          height="fit-content"
          borderRadius={1}
          textAlign="center"
          padding={2}
        >
          {loading ? (
            <LinearProgressWithLabelI />
          ) : (
            imageUrl && <img src={imageUrl} alt="Generated Image" />
          )}
        </Grid>
        <Button
          sx={{
            bgcolor: "rgb(231, 132, 48)",
            height: "50px",
            marginTop: "3em",
            margin: " 0 auto",
            "&:hover": {
              bgcolor: "rgb(231, 132, 48)",
              scale: "1.05",
              transition: ".2s",
            },
          }}
          variant="contained"
          onClick={generateMotion}
        >
          Add Motion
        </Button>
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          // overflow="auto"
          bgcolor="transparent"
          height="fit-content"
          justifyContent="center"
          textAlign="center"
          borderRadius={1}
          padding={2}
        >
          {loadingM ? (
            <LinearProgressWithLabelM />
          ) : (
            motionUrl && (
              <ReactPlayer
                playing
                height={768}
                width={768}
                muted={true}
                loop={true}
                url={motionUrl}
              />
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ImageInterface;
