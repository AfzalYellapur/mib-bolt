import React from "react";
import { Box, Typography } from "@mui/material";

const BorderStyledButton = ({ content }) => {
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
    <>
      <Box
        position="relative"
        sx={{
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
        }}
      >
        <Box
          bgcolor="#000000"
          position="relative"
          borderRadius="10px"
          padding="0.5rem 1.5rem"
          zIndex={-10}
        >
          <Typography color="white">{content}</Typography>
        </Box>
      </Box>
    </>
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

export default BorderStyledButton;
