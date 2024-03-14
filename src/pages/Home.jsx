import React from "react";
import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import BotContainer from "../components/botContainer/BotContainer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BotContainer />
      <BottomNav />
    </div>
  );
}

export default App;
