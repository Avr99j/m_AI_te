import React from "react";
import { Button } from "@mui/base/Button";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import "../generatePicsBtn/generatePicsBtn.css";

function GeneratePicsBtn(props) {
  return (
    <Button className={`generate-Pics-Btn ${props.className}`}>
      <div className="btn-icon-div">
        <ImageOutlinedIcon style={{ fontSize: "40" }} className="btn-icon" />
      </div>
      <div className="btn-text-div">
        <h6 className="btn-text">Pictures & Art</h6>
      </div>
    </Button>
  );
}

export default GeneratePicsBtn;
