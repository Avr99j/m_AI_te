import React from "react";
import { Button } from "@mui/base/Button";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import "../generatePicsBtn/GeneratePicsBtn.css";
import { NavLink } from "react-router-dom";

function GeneratePicsBtn(props) {
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

export default GeneratePicsBtn;
