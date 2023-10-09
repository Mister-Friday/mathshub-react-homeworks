import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = (props) => {
  return (
    <motion.button
      type={props.type || 'button'}
      className={props.className || 'bttn'}
      onClick={props.onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
