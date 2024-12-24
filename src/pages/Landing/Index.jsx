import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./CSS/index.css";

// importing components
import EventInfiniteScroll from "./components/EventInfiniteScroll";
import WhatWeStandFor from "./components/WhatweStandFor";
import AboutUs from "./components/AboutUs";
import KnowOurTeam from "./components/KnowUs";
import HeroComponent from "./components/heroComponent";
import KeepInTouch from "./components/KeepInTouch";
import MissionSection from "./components/Misson";

const theme = createTheme({
  typography: {
    fontFamily: "Editorialnew, sans-serif",
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100dvh" position="relative" width="100%">
        <HeroComponent />
        <Box width="100%" display="flex" justifyContent="center" pt="5rem">
          <EventInfiniteScroll />
        </Box>
        <Box marginBottom="4.5rem">
          <WhatWeStandFor />
        </Box>
        <Box marginBottom="-18rem">
          <MissionSection />
        </Box>
        <Box marginBottom="8rem">
          <AboutUs />
        </Box>
        <Box>
          <KnowOurTeam />
        </Box>
        <Box>
          <KeepInTouch />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
