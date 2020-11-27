import React, { useEffect } from 'react';
import './App.css';
import Landing from "./components/Landing";
import FirstSection from "./components/FirstSection";
// import SecondSection from "./components/SecondSection";

function App() {
  useEffect(() => {
  }, [])

  return (
    <>
      <Landing />
      <FirstSection />
      {/* <SecondSection /> */}
    </>
  );
}

export default App;
