import React, { useRef } from "react";
import { Box } from "@mui/material";
import { useTransform, useScroll, motion } from "framer-motion";
import "../CSS/KnowUsCss.css";

//importing assests
import Nidhi from "../../../assets/Team/Nidhi.png";
import Vaibhav from "../../../assets/Team/Vaibhav.png";
import Abdul from "../../../assets/Team/Abdul.png";
import Shrusti from "../../../assets/Team/Shrusti.png";
import Kushal from "../../../assets/Team/Kushal.png";

const KnowOurTeam = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "start end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [1, 0], [5, 0]);
  const rotate2 = useTransform(scrollYProgress, [1, 0], [-5, 0]);
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        marginTop: "5rem",
        gap: 2,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: "Editorialnew, sans-serif",
        fontSize: "3rem",
        position: "relative",
      }}
    >
      <Box display="flex" gap={2} marginBottom="1rem">
        <motion.div ref={ref} style={{ y: titleY, rotate: rotate1 }}>
          Know
        </motion.div>
        <motion.div ref={ref} style={{ y: titleY }}>
          Our
        </motion.div>
        <motion.div ref={ref} style={{ y: titleY, rotate: rotate2 }}>
          Team?
        </motion.div>
      </Box>

      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <div className="l-container" style={{ paddingBottom: "4rem" }}>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: `url(${Nidhi})`,
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: `url(${Vaibhav})`,
              }}
            ></div>
          </div>
        </div>

        <div className="l2-container">
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: `url(${Abdul})`,
              }}
            ></div>
          </div>
          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: `url(${Shrusti})`,
              }}
            ></div>
          </div>

          <div className="b-game-card">
            <div
              className="b-game-card__cover"
              style={{
                backgroundImage: `url(${Kushal})`,
              }}
            ></div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default KnowOurTeam;
