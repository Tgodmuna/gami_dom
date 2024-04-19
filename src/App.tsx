import React from "react";
import "./App.css";
import Header from "./components/header/Header.tsx";
import NavBar from "./components/header/navBar/NavBar.tsx";
import Hero from "./components/HeroPage/Hero.tsx";

function App ()
{
  return <div className="App ">
    <Header />
    <NavBar />
    <Hero/>
  </div>;
}

export default App;
