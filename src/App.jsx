import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import ImageInterface from "./components/imageInterface/ImageInterface";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="chatInterface" element={<ChatInterface />}></Route>
        <Route path="ImageInterface" element={<ImageInterface />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
