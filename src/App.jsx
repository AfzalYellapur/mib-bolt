import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/Index";
import EventPage from "./pages/Events";
import Navbar from "./utils/navbar/";
import { Box } from "@mui/material";
import Header from "./utils/formsNavbar";
import "./styles/global.css";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
    console.log(path);
  }, [location.pathname]);
  return (
    <>
      <Box>
        {/* {path !== "/" && <Header />} */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Box>
      <Navbar />
    </>
  );
}

export default App;
