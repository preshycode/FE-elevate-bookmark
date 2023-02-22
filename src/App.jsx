import { useState } from "react";

import "./App.css";
import images from "./images";
import {
  Navbar,
  Header,
  Footer,
  Features,
  Faq,
  Extention,
  Contact,
} from "./conponents";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Extention />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
