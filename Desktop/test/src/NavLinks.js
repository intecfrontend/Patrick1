import React from "react";
import "./Nav.css";
import { motion } from "framer-motion";
const animateFrom = { opacity: 0, y: -40 };
const animateTo = { opacity: 1, y: 0 };

export default function Navlinks(props) {
  return (
    <div>
      <ul>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.15 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/">Home</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.35 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#about">About Me</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.55 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#skills">Skills</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.75 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#youtube">Youtube</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.95 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#contact">Contact</a>
        </motion.li>
      </ul>
    </div>
  );
}
