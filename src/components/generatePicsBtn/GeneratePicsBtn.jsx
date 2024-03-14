import React from "react";
import { Button } from "@mui/base/Button";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import "../generatePicsBtn/GeneratePicsBtn.css";

function GeneratePicsBtn() {
  return (
    <Button className="generate-Pics-Btn">
      <div className="btn-icon-div">
        <ImageOutlinedIcon style={{ fontSize: "60" }} className="btn-icon" />
      </div>
      <div className="btn-text-div">
        <h6 className="btn-text">Text to speach</h6>
      </div>
    </Button>
  );
}

export default GeneratePicsBtn;
