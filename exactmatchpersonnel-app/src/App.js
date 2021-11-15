import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../src/Assets/Images/EMPlogo.png';
import './style.css';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Employees from './components/Employees/Employees'
import Employers from './components/Employers/Employers'
import Resources from './components/Resources/Resources'
import Contact from './components/Contact/Contact'
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "../src/components/Pre";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
      upadateLoad(false);
    },1200);
  }, []);

  return (
    <BrowserRouter>
    <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
