import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import "../CSS/Mission.css";

import TunnelVideo from "../../../assets/Landing/tunnel-video.mp4";

const MissionSection = () => {
  const missionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: missionRef,
    offset: ["start start", "end start"],
  });

  const missionTextY = useTransform(scrollYProgress, [0, 1], ["-210%", "-20%"]);
  const misionTextX = useTransform(scrollYProgress, [0, 1], ["10%", "40%"]);
  const VisionTextY = useTransform(scrollYProgress, [0, 1], ["-160%", "-40%"]);
  const visionTextX = useTransform(scrollYProgress, [0, 1], ["-10%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  return (
    <Box className="tunnel-video" position="relative">
      <Box
        position="relative"
        component="video"
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
        <source src={TunnelVideo} type="video/mp4" />
      </Box>

      <Box
        ref={missionRef}
        display="flex"
        positon="absolute"
        bottom="70"
        height="0%"
      >
        <Box
          component={motion.div}
          style={{ y: missionTextY, x: misionTextX }}
          display="flex"
          flexDirection="column"
        >
          <Typography
            fontSize="4rem"
            width={"8rem"}
            fontFamily="Editorialnew, sans-serif"
          >
            Mission
          </Typography>
          <Box
            component="p"
            bgcolor={"black"}
            fontFamily="Editorialnew, sans-serif"
            fontSize="1.2rem"
            padding="1rem"
          >
            Make in BVB (MiB) aims at blossoming entrepreneurial mindset and
            leadership qualities among the students by organizing workshops,
            events and competitions. MiB provides students the stage to come up
            with their innovative ideas and transform them into reality.
          </Box>
        </Box>
        <Box component={motion.div} style={{ y: VisionTextY, x: visionTextX }}>
          {" "}
          <Typography
            fontSize="4rem"
            width={"100%"}
            fontFamily="Editorialnew, sans-serif"
            textAlign="right"
          >
            Vision
          </Typography>
          <Box
            component="p"
            bgcolor={"black"}
            fontFamily="Editorialnew, sans-serif"
            fontSize="1.2rem"
            padding="1rem"
          >
            Make in BVB aspires to help individuals grow, who view socially
            relevant problems as an opportunity and have an interest to solve
            them by coming up with ingenious solutions. Hence, contributing to
            the start-up ecosystem also with the goal of developing ourselves as
            capable leaders.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionSection;
