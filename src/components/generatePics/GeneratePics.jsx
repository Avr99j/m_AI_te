import React from "react";
import { Button, Grid } from "@mui/material";
import "../generatePics/GeneratePics.css";
import { NavLink } from "react-router-dom";

function GeneratePics() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className="create-image"
        sx={{
          height: "70vh",
          borderRadius: "5px",
          border: ".5px solid rgb(32, 232, 246)",
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
              Unleash your creativity and bring your ideas to life with the power of AI.
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
                <NavLink style={{ textDecoration: "none" }} to="ImageInterface">
                  Image AI
                </NavLink>
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GeneratePics;
