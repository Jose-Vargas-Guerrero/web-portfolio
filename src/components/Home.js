import React, { useEffect } from 'react'
import {motion} from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css";

const entry = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5
    },
    Exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut'}
    }
  }
}

function Home() {
  useEffect( () => {
    Aos.init({duration: 2000});
  }, [])
    return (
        <>
        <div className="contenedor-madre">
            <motion.div
            variants={entry}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container-fluid hero">
              <div className="container hero-content">
                <h1 className="home-title">Rent a vehicle where you travel</h1>
                <h2 className="home-sub">We get it for you</h2>
                <a className="hero-link" href="#content">Explore</a>
              </div>
            </motion.div>
            <div data-aos="fade-up" data-aos-duration="1000" className="container" id="content">
              <h1 className="content-title">Car rental search agency</h1>
              <p className="content-p">Wherever you live, travel or any situation we can find a vehicle for you, renting it is as easy as waiting for our response.</p>
              <ul>
                <li><i class="fas fa-check-circle"></i> Sure</li>
                <li><i class="fas fa-check-circle"></i> Quick and Easy</li>
                <li><i class="fas fa-check-circle"></i> Available around the Clock</li>
              </ul>
            </div>
            <footer>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <a href="prevent-default" className="designer">Website by Jose Vargas</a>
            <a href="prevent-default" className="mail">rentatravxls@gmail.com</a>
            </footer>
        </div>
        </>
    )
}

export default Home
