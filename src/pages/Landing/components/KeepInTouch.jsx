import React, { useRef } from "react";
import { Box, TextField, createTheme, ThemeProvider } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import "../CSS/KeepInTouchCss.css";

const KeepInTouch = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.3", "start end"],
  });

  const ref2 = useRef(null);
  const { scrollYProgress: scrollProgressforRef2 } = useScroll({
    target: ref,
    offset: ["start 0.5", "start end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const KeepY1 = useTransform(scrollYProgress, [1, 0], [100, 0]);
  const KeepY2 = useTransform(scrollYProgress, [1, 0], [150, 0]);
  const KeepY3 = useTransform(scrollYProgress, [1, 0], [200, 0]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: "3.5rem",
        fontFamily: "Editorialnew, sans-serif",
        textAlign: "center",
        p: "2rem",
      }}
    >
      <Box
        component={motion.div}
        display="flex"
        gap={1}
        width="100%"
        style={{ opacity: titleOpacity }}
      >
        <motion.div ref={ref} style={{ y: KeepY1 }}>
          Keep
        </motion.div>
        <motion.div ref={ref} style={{ y: KeepY2 }}>
          In
        </motion.div>
        <motion.div ref={ref} style={{ y: KeepY3 }}>
          Touch
        </motion.div>
      </Box>

      <Box
        component={"div"}
        display="flex"
        justifyContent="space-between"
        width="90dvw"
        padding="2rem"
      >
        <Box
          component="form"
          sx={{
            padding: "2rem",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))", // Slightly enhanced gradient
              boxShadow: "0 10px 40px rgba(31, 38, 135, 0.5)", // Stronger shadow for depth
              border: "1px solid rgba(255, 255, 255, 0.2)", // More noticeable border
              zIndex: -1,
            },
          }}
          style={{
            backdropFilter: "blur(20px)", // More pronounced blur effect
            WebkitBackdropFilter: "blur(20px)", // Safari support
          }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Box display="flex" gap={2}>
            <Box display="flex" flexDirection="column" mb={2}>
              <TextField
                id="name-input"
                label="Name"
                variant="filled"
                type="text"
                fullWidth
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent dark background
                    color: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)", // Translucent label
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                id="email-input"
                label="Email"
                variant="filled"
                type="email"
                fullWidth
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent dark background
                    color: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)", // Translucent label
                  },
                }}
              />
            </Box>
          </Box>

          <Box>
            <TextField
              id="textArea"
              label="Message"
              variant="filled"
              multiline
              rows={4}
              fullWidth
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent dark background
                  color: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)", // Translucent label
                },
              }}
            />
          </Box>
        </Box>

        <Box> </Box>
      </Box>
    </Box>
  );
};

export default KeepInTouch;
