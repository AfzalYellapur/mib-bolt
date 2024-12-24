import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { Box, Typography } from "@mui/material";
import { loadImages } from "../../../utils/Landing/imageLoader";
import { useImageSequence } from "../../../utils/Landing/useImageSequence";
import "../CSS/AboutUs.css";

const AboutUs = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [error, setError] = useState(null);

  const images = useMemo(() => loadImages(6, 60), []);

  useEffect(() => {
    Promise.all(images)
      .then(() => setImagesLoaded(true))
      .catch((err) => {
        console.error("Failed to load images:", err);
        setError("Failed to load images. Please try refreshing the page.");
      });
  }, [images]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "0.9 end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const imageIndex = useTransform(smoothProgress, [0, 0.8], [6, 59]);

  const textOpacity = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  const textYAbout = useTransform(scrollYProgress, [0.9, 0], [-200, 400]);

  const textYUs = useTransform(scrollYProgress, [0.9, 0], [-200, 450]);
  const paragraphY = useTransform(scrollYProgress, [0.9, 0], [-240, 180]);
  const paragraphLineHeight = useTransform(scrollYProgress, [0, 0.9], [8, 1.6]);

  const { render, renderError } = useImageSequence(
    canvasRef,
    images,
    imagesLoaded
  );

  useMotionValueEvent(imageIndex, "change", (latest) => {
    render(Math.round(latest));
  });

  if (error || renderError) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="error">
          {error || renderError}
        </Typography>
      </Box>
    );
  }

  return (
    <motion.div
      className="about-us"
      ref={containerRef}
      style={{
        height: "200vh",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          // y: sectionY,
        }}
      >
        <motion.canvas
          className="image-seq"
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <motion.div
          ref={textRef}
          style={{
            position: "absolute",
            top: "50%",
            width: "100%",
            height: "100%",
            textAlign: "center",
            opacity: textOpacity,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              padding: "2rem",
              borderRadius: "1rem",
              // transform: "translate(50%,-50%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                padding: "2rem",
                borderRadius: "1rem",
              }}
            >
              <Typography
                variant="h2"
                component={motion.h1}
                gutterBottom
                style={{ y: textYAbout }}
              >
                About
              </Typography>
              <Typography
                variant="h2"
                component={motion.h1}
                gutterBottom
                style={{ y: textYUs }}
              >
                Us
              </Typography>
            </Box>
            <Typography
              component={motion.p}
              variant="body1"
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
              style={{
                y: paragraphY,
                lineHeight: paragraphLineHeight,
              }}
            >
              With the motto of "Inspiring minds to innovate", Make in BVB was
              started by a bunch of self-motivated students under CTIE (Centre
              for Technology Innovation and Entrepreneurship) in the year 2014.
              From then till present times, it has been instilling an
              entrepreneurial mindset among the youth in and around the state
              and is recognised even globally through BVB-Umass Student Exchange
              Programs.
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
