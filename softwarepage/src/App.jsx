import { useState } from "react";
import AboutUS from "./components/AboutUs";
import OurValues from "./components/OurValues";
import OurValuesSction2 from "./components/OurValuesPart2";
import Products from "./components/Product";
import SPSMap from "./components/SPSMap";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <WhatsApp />
      <AboutUS />
      <OurValues />
      <OurValuesSction2 />
      <Products />
      <SPSMap />
      <Footer/>
    </>
  );
}

export default App;
