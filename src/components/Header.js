import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h1 className="name">Moonshad Shahid</h1>
        <p className="tagline">Front-End Developer | CSE Graduate</p>
        <a href="mailto:moonshadshahid07@gmail.com" className="btn-main">Contact Me</a>
      </div>
    </motion.header>
  );
};

export default Header;

