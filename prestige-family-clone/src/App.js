// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
