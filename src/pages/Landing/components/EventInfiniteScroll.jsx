import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const sponsors = [
  "Technology Incubation and Development of Entrepreneurs",
  "Ideation",
  "Butterfly",
  "PUPA",
  "Elvic",
  "Idea-Buildathon",
  "Hubli ESDM Exchange (HEX)",
];

const EventInfiniteScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 0.25"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  console.log("y", y);

  return (
    <motion.div
      ref={containerRef}
      style={{
        opacity,
        y,
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100px", // Set a fixed height for visibility
        padding: "24px 0",
        backgroundColor: "transparent", // Ensure background is visible
      }}
    >
      {/* Gradient Overlays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 128,
          background: "linear-gradient(to right, black, transparent)",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 128,
          background: "linear-gradient(to left, black, transparent)",
          zIndex: 10,
        }}
      />

      {/* Scrolling wrapper */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          position: "relative",
          animation: "scroll 15s linear infinite",
          whiteSpace: "nowrap", // Prevent wrapping of text
        }}
      >
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}
        </style>
        {/* Original set + copies for seamless scrolling */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{
              flexShrink: 0,
              color: "white",
              opacity: 0.9,
              px: 1,
              fontWeight: 300,
              minWidth: "200px",
              textAlign: "center",
            }}
          >
            {sponsor}
          </Typography>
        ))}
      </div>
    </motion.div>
  );
};

export default EventInfiniteScroll;
