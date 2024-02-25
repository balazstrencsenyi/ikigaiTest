import React, { useEffect } from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  useEffect(() => {
    const header = document.querySelector(".Header");

    const scrollHandler = () => {
      const scrollPos = window.scrollY;
      const opacity = Math.min(scrollPos / 400, 1); // Adjust speed here
      header.style.backgroundColor = `rgba(2, 126, 228, ${0.5 + opacity * 0.5})`; // Gradually increase opacity from 0.2 to 1
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <div className="menu">Home</div>
        <div className="menu">Services</div>
        <div className="menu">Benefits</div>
        <div className="menu">Team</div>
        <div className="menu">Blog</div>
        <div className="menu">Contact</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="Page2"></div>

      <div className="Page3"></div>
    </div>
  );
}

export default App;
