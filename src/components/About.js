import React, { useEffect} from 'react';
import { motion } from "framer-motion";
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

function About() {
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
             className="container-fluid about-hero">
              <div className="container about-content">
                <h1 className="about-title">What we do</h1>
                <h2 className="about-sub">The company and the founder</h2>
                <a className="about-link" href="#about">Find out</a>
              </div>
            </motion.div>
            <div data-aos="slide-up" data-aos-duration="1000" className="container" id="about">
                <h1 className="titulo">A car rental agency</h1>
                <p className="cuerpo">Our objective is that the client, regardless of where he is, can obtain a service to rent a vehicle, we have our own agencies but we also have arrangements with other smaller agencies.</p>
            </div>
            <div data-aos="slide-up" data-aos-duration="1000" className="container-fluid contenedor-final">
            <div className="container ceo-container">
                    <div className="ceo-image rounded-circle"></div>
                    <h2 className="ceo-title">"I created the agency so that others do not go through that mishap"</h2>
                    <p className="ceo-body">Donovan Desmond, Founder and CEO of "Rent a Travel", years of experience in the rental field.</p>
            </div>
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

export default About
