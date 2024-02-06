import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/Header.jsx";
import { Home, Login, Upload, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
