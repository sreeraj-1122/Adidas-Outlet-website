import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Men from "./pages/Men/Men";
import Kids from "./pages/Kids/Kids";
import Woman from "./pages/woman/Woman";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
