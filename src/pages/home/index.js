import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header/Header";
import TabOptions from "../../components/common/tabOptions";
import Delevery from "../../components/delevery/Delevery";
import Dining from "../../components/dining/Dining";
import Nightlife from "./../../components/nightlife/Nightlife";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Delevery");
  const getCorrectPage = (tab) => {
    switch (tab) {
      case "Delevery":
        return <Delevery />;
      case "Dining":
        return <Dining />;
      case "Nightlife":
        return <Nightlife />;
      default:
        return <Delevery />;
    }
  };


  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}  />
      {getCorrectPage(activeTab)}
      <Footer />
    </div>
  );
}

export default HomePage;
