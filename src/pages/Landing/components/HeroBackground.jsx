import { useRef, useEffect } from "react";
import { Box } from "@mui/material";

//importing assests
import h_Video from "../../../assets/Landing/hero-video.mp4";

const heroVideo = h_Video;

const HeroBg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Adjust speed (2x in this case)
    }
  }, []);

  return (
    <Box
      component="video"
      ref={videoRef}
      sx={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      autoPlay
      muted
      playsInline
      loop={true}
      width={"100%"}
      zIndex="-10"
    >
      <source src={heroVideo} type="video/mp4" />
    </Box>
  );
};

export default HeroBg;
