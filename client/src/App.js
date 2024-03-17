import React, {useState, useEffect} from 'react';
import './App.css';
import Preloader from '../src/components/Pre'
import Navbar from './components/Navbar/Navbar';
import { Route , Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Contact from './components/Contact/Contact';
import Services from './components/Cards/Cards';

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router >
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}></div>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
