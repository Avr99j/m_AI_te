import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Header from "../header/Heading";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function ImageInterface() {
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
              placeholder="Enter a prompt to generate..."
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
          overflow="auto"
          bgcolor="rgb(48, 48, 48)"
          height="90vh"
          borderRadius={1}
          padding={2}
        ></Grid>
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          overflow="auto"
          bgcolor="rgb(48, 48, 48)"
          height="90vh"
          borderRadius={1}
          padding={2}
        ></Grid>
      </Grid>
    </Grid>
  );
}

export default ImageInterface;
