import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
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

function Travel() {
  useEffect( () => {
    Aos.init({duration: 2000});
  }, [])
    return (
        <>
        <div className="container-fluid contenedor-madre">
          <motion.div
          variants={entry}
          initial="hidden"
          animate="visible"
          exit="exit"
           className="container-fluid contract">
            <div className="container contract-container">
              <h1 className="contract-title">Choose the best contract at the moment</h1>
              <h2 className="contract-sub">always being adaptable</h2>
              <a className="contract-link" href="#contract-content">More</a>
            </div>
          </motion.div>
          <div data-aos="slide-up" data-aos-duration="1000" className="container" id="contract-content">
              <h1 className="contract-title">Hire a car, with a designated driver.</h1>
              <p className="contract-p">Or you may only need a car, we can get the contract you need regardless of the place, just contact us and we will not scan.</p>
              <h2 className="contract-s">Drivers comply with paperwork and safety regulations.</h2>
              <ul className="contract-list">
                  <li className="contract-item">Knowledge and orientation.</li>
                  <li className="contract-item">Verified documentation.</li>
                  <li className="contract-item">Availability according to the contract.</li>
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

export default Travel
