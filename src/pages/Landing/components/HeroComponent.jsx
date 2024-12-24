import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import "../CSS/index.css";

import HeroBg from "./HeroBackground";

//import assets
import KletechLogo from "../../../assets/logos/kletechlogo.png";
import CtieLogo from "../../../assets/logos/ctie-logo_1.png";

const HeroComponent = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundvidY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Define the animation that updates the CSS variable
  const moveLight = keyframes`
    0% {
      --angle: 0deg;
    }
    100% {
      --angle: 360deg;
    }
    `;
  return (
    <Box
      ref={heroRef}
      display="grid"
      gridTemplateRows="1fr"
      gridTemplateColumns="1fr"
      height="105dvh"
      bgcolor={"black"}
      sx={{
        alignItems: "start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/*Placing the video */}
      <Box
        component={motion.div}
        width="100%"
        height="100%"
        position="absolute"
        top={"65%"}
        left={0}
        zIndex={1}
        style={{
          y: backgroundvidY,
        }}
      >
        <HeroBg />
      </Box>
      <Box
        component={motion.div}
        style={{ y: textY }}
        height="100%"
        display="flex"
        flexDirection="column"
        textAlign="center"
        zIndex={10}
        px={2}
        bgcolor="transparent"
        gap={10}
      >
        <Box
          p="1rem"
          alignSelf="initial"
          sx={{
            fontFamily: "'Dela Gothic One', sans-serif",
            fontSize: "1.5rem",
          }}
        >
          <Box
            display="flex"
            gap="0.25em"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            fontFamily="'Dela Gothic One', sans-serif"
            fontSize={32}
          >
            <img
              src={KletechLogo}
              alt="kletechLogo"
              width="auto"
              height={70}
              style={{ borderRadius: "0.25rem", marginRight: "3%" }}
            />
            Make in BVB
            <img
              src={CtieLogo}
              alt="CtieLogo"
              width="auto"
              height={70}
              style={{ borderRadius: "1.5rem" }}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Editorialnew, sans-serif",
                fontSize: "9rem",
                lineHeight: 0.9,
              }}
            >
              Inspiring minds to innovate
            </Typography>
          </Box>
          <Box display="flex" width="100%" justifyContent="center">
            <Box
              className="styled-button"
              position="relative"
              width="8.5rem"
              sx={{
                cursor: "pointer",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "-2px",
                  borderRadius: "12px",
                  padding: "1px",
                  background: `conic-gradient(from 0deg,
              #ff4545 0deg,
              #00ff99 90deg,
              #006aff 180deg,
              #ff0095 270deg,
              #ff4545 360deg
            )`,
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                },
                ":hover": {
                  "--angle": "0deg",
                  cursor: "pointer",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "12px",
                    padding: "1px",
                    background: `conic-gradient(from var(--angle),
              #ff4545 0deg,
              #00ff99 90deg,
              #006aff 180deg,
              #ff0095 270deg,
              #ff4545 360deg
            )`,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    animation: `${moveLight} 3s linear infinite`,
                  },
                },
              }}
            >
              <Box
                bgcolor="#000000"
                position="relative"
                borderRadius="10px"
                padding="0.5rem 1.5rem"
                zIndex={+10}
              >
                <Typography color="white" fontSize={18} fontWeight={"600 !important"}>Explore</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <div id="eventscroll" />
    </Box>
  );
};

// Add this to ensure the CSS variable animation works in all browsers
const style = document.createElement("style");
style.textContent = `
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;
document.head.appendChild(style);
export default HeroComponent;
