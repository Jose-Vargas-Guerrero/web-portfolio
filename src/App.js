import './App.css';
import React from 'react';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from './components/Navbar.js'
import './components/Navbar.css';
import Home from './components/Home';
import './components/Home.css';
import Contracts from './components/Contracts';
import './components/Contracts.css';
import './components/About.css';
import About from './components/About';
import './components/About.css';



function App() {
  const location = useLocation();
  return (
   <>
   {/* enrutamiento de sitio */}
   <Navbar/>
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/travel">
          <Contracts/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
   </>
  );
}

export default App;
