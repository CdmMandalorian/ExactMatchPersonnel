import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../src/Assets/Images/EMPlogo.png';
import './style.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Location from './components/Location/Location'
import Services from './components/Services/Services'
import Resources from './components/Resources/Resources'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/location" component={Location} />
          <Route path="/services" component={Services} />
          <Route path="/resources" component={Resources} />
          <Route path="/Contact" component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
