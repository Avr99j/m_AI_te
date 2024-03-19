import React from "react";
import { Button } from "@mui/base/Button";
import LyricsOutlinedIcon from "@mui/icons-material/LyricsOutlined";
import "./SpeechToTextBtn.css";

function SpeechToTextBtn() {
  return (
    <Button className="speech-to-text-btn speech-to-text-container">
      <div className="btn-icon-div">
        <LyricsOutlinedIcon style={{ fontSize: "40" }} className="btn-icon " />
      </div>
      <div className="btn-text-div">
        <h6 className="btn-text">Text to speech</h6>
      </div>
    </Button>
  );
}

export default SpeechToTextBtn;
