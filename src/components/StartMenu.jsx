import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGmail from '../assets/images/gmail.png';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconCopy from '../assets/images/copy.svg';
import IconCopied from '../assets/images/copied.svg';
import ImageJavascript from '../assets/images/javascript.png';
import ImageHtml from '../assets/images/html.png';
import ImageCss from '../assets/images/css.png';
import ImageReact from '../assets/images/react.png';
import ImageGit from '../assets/images/git.png';
import ImageTailwind from '../assets/images/tailwind.svg';
import ImageVue from '../assets/images/vue.png';
import ImagePhp from '../assets/images/php.png';
import ImageLaravel from '../assets/images/laravel.svg';
import IconGithub from '../assets/images/github.svg';

const StartMenu = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 1000);
  };

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -500 }}
      exit={{ x: -500 }}
      className="absolute z-10 flex flex-col border-4 bg-gray-200 border-primary-orange bottom-20 left-2 w-80 h-96"
    >
      <div className='text-black'>
        <div className="flex items-center gap-4 text-sm font-bold  flex-col">
        <CopyToClipboard onCopy={copyEmail} text="datogagua98@gmail.com">
                <div
                  className={`${
                    copiedEmail && ''
                  } flex items-center w-full gap-3  duration-150 hover:bg-primary-orange p-3  border-black cursor-pointer`}
                >
                  <img src={ImageGmail} alt="gmail" className="h-8" />
                  <p>datogagua98@gmail.com</p>
                  <img
                    src={copiedEmail ? IconCopied : IconCopy}
                    alt="copy"
                    className="h-8 ml-5"
                  />
                </div>
        </CopyToClipboard>
        <a
          className="flex items-center w-full gap-3  duration-150 hover:bg-primary-orange p-3  border-black cursor-pointer"
          href='https://github.com/datodvp'
          target='_blank'
        >
          <img src={IconGithub} alt="gmail" className="h-8" />
          <p>Github</p>
        </a>
        </div>
      </div>
    </motion.div>
  );
};

export default StartMenu;
