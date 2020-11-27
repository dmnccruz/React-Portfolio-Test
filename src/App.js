import React, { useEffect } from 'react';
import './App.css';
import Landing from "./components/Landing";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <>
      <Landing />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
}

export default App;
