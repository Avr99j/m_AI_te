import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

function LinearProgressWithLabelI() {
  const [progress, setProgress] = useState(0);

  // Simulate progress update (you can replace this with your own logic)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 288);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        Progress: {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
export default LinearProgressWithLabelI;
