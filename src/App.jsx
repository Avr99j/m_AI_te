import React from "react";
import BottomNav from "./components/bottomNav/BottomNav";
import Header from "./components/header/Header";
import BotContainer from "./components/botContainer/BotContainer";
import Text from "./components/text/Text"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BotContainer />
      <Text />
    </div>
  );
}

export default App;
