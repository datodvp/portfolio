import { useState } from 'react';
import Window from '../components/Window';
import ImageMan from '../assets/images/man.png';
import IconCopy from '../assets/images/copy.svg';
import IconCopied from '../assets/images/copied.svg';
import ImageGmail from '../assets/images/gmail.png';
import IconGithub from '../assets/images/github.svg';
import CopyToClipboard from 'react-copy-to-clipboard';

const About = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 1000);
  };
  return (
    <Window title="About Me">
      <div className="flex h-full">
        <div className="w-[30%] mt-5 p-4  min-w-fit">
          <div className="flex flex-col items-center gap-3 m-auto">
            <img
              src={ImageMan}
              alt="man"
              className="max-w-[200px] w-full border border-black mb-5"
            />
            <div className="flex flex-col gap-3">
              <CopyToClipboard onCopy={copyEmail} text="datogagua98@gmail.com">
                <div
                  className={`${
                    copiedEmail && 'bg-green-400 hover:bg-green-400'
                  } flex items-center w-full gap-3 px-3 duration-150 border border-black cursor-pointer py-7 h-11 hover:bg-gray-300`}
                >
                  <img src={ImageGmail} alt="gmail" className="h-8" />
                  <p>datogagua98@gmail.com</p>
                  <img
                    src={copiedEmail ? IconCopied : IconCopy}
                    alt="copy"
                    className="h-8"
                  />
                </div>
              </CopyToClipboard>

              <a
                href="https://github.com/datodvp"
                target="_blank"
                className="flex items-center w-full gap-3 px-3 border border-black cursor-pointer py-7 h-11 hover:bg-gray-300"
              >
                <img src={IconGithub} alt="gmail" className="h-8" />
                <p>My Github</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-green-700 "></div>
      </div>
    </Window>
  );
};

export default About;
