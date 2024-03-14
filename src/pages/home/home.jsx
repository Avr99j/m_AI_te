import React from "react";
import Header from "../../components/header/header";
import BotContainer from "../../components/botContainer/botContainer";
import SpeachToTextBtn from "../../components/speachToTextBtn/SpeachToTextBtn";
import GeneratePicsBtn from "../../components/generatePicsBtn/GeneratePicsBtn";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <BotContainer />
      <SpeachToTextBtn />
      <GeneratePicsBtn />
    </div>
  );
}

export default Home;
