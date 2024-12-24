import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./index.css";

//importing assets
import mibLogo from "../../assets/logos/mib-logo.jpg";

const Navbar = () => {
  return (
    <Box id="blurWrapper" zIndex={1000} position={"relative"}>
      <Box
        display="flex"
        gap="1rem"
        justifyContent="center"
        alignItems="center"
        borderRadius="1.125rem"
        position="fixed"
        bottom="2%"
        left="50%"
        bgcolor="#131313"
        p="0rem 0.5rem"
        height="3.5rem"
        border="1px solid #242424"
        // grid
        sx={{
          transform: "translateX(-50%)",
          pointerEvents: "auto",
          gridColumnGap: "1.25rem",
          gridRowGap: "1.25rem",
        }}
      >
        <Box display="flex" gap="0.25em" alignItems="center">
          <Typography
            color="white"
            sx={{
              fontFamily: "'Dela Gothic One', sans-serif",
              fontSize: "1.5rem",
            }}
          >
            MiB
          </Typography>
        </Box>
        <Box
          display="flex"
          gap="0.25em"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box
            className="styled-navbar-buttons"
            height="100%"
            display="flex"
            alignItems="center"
          >
            <Typography
              component="a"
              position="relative"
              color="white"
              sx={{ mx: 1 }}
            >
              Home
            </Typography>
          </Box>
          <Box
            className="styled-navbar-buttons"
            height="100%"
            display="flex"
            alignItems="center"
          >
            <Typography
              component="a"
              position="relative"
              color="white"
              sx={{ mx: 1 }}
            >
              About
            </Typography>
          </Box>
          <Box
            className="styled-navbar-buttons"
            height="100%"
            display="flex"
            alignItems="center"
          >
            <Typography
              component="a"
              position="relative"
              color="white"
              sx={{ mx: 1 }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
