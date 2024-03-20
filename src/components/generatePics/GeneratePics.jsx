import React from "react";
import { Button, Grid } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import "../generatePics/GeneratePics.css";
import { NavLink } from "react-router-dom";

function GeneratePics(props) {
  return (
    <Button className={`generate-Pics-Btn ${props.className}`}>
      <NavLink to="ImageInterface" style={{ textDecoration: "none" }}>
        <div className="btn-icon-div">
          <ImageOutlinedIcon style={{ fontSize: "40" }} className="btn-icon" />
        </div>
        <div className="btn-text-div">
          <h6 className="btn-text">Pictures & Art</h6>
        </div>
      </NavLink>
    </Button>
  );
}

// function GeneratePics() {
//   return <Grid container>hello</Grid>;
// }

export default GeneratePics;
