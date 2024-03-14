import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AskAI from './pages/AskAI';
import TextToSpeech from './pages/TextToSpeech';
import ImageGenerator from './pages/ImageGenerator';
import './App.css'
// import BottomNav from "./components/bottomNav/BottomNav";
// import Header from "./components/header/Header";
// import BotContainer from "./components/botContainer/BotContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="askai/*" element={<AskAI />} />
        <Route path="texttospeach/*" element={<TextToSpeech />} />
        <Route path="imagegenerator/*" element={<ImageGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
