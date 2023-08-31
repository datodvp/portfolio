import React from 'react';
import { motion } from 'framer-motion';
import ImageGmail from '../assets/images/gmail.png';
import CopyToClipboard from 'react-copy-to-clipboard';

const StartMenu = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -500 }}
      exit={{ x: -500 }}
      className="absolute z-10 flex flex-col p-5 border-4 bg-primary-green border-primary-orange bottom-20 left-2 w-80 h-96"
    >
      <div>
        <div className="flex items-center gap-4 text-lg font-bold text-white">
          <img src={ImageGmail} alt="gmail" className="w-10 h-10" />
          <p>datogagua98@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StartMenu;
