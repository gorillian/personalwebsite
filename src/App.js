import { Route, Routes } from "react-router-dom";

import "./components/styles/App.scss";
import MainNav from "./components/nav/mainNav";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

export default function App() {
  return (
    <div className="app-container">
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
