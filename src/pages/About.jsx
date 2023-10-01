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
        <div className="w-full bg-slate-200">
          <div className="flex flex-col w-full h-full gap-5 p-10">
            <h1 className="text-4xl font-medium">
              Hi I am <span className="text-orange-600">Davit Gagua</span>
            </h1>
            <p className="text-xl">
              I am self-taught developer and I'm trying to become as good of a
              developer as I can.
            </p>
            <p className="text-xl">
              My road to web development was when i first coded in C++, this is
              what got my interest and after that i started learning more and
              more until I end up learning{' '}
              <span className="font-bold">Javascript</span>.
            </p>
            <p className="text-xl">
              On that I added some HTML and CSS and i was creating games for fun
              in Canvas.
            </p>
            <p className="text-xl">
              Next step was when I heard about{' '}
              <span className="font-bold">ReactJS</span> and understood that it
              was one of the most demanded frameworks and learnt it.
            </p>
            <p className="text-xl">
              I had bootcamp of
              <span className="font-bold"> Laravel and VueJS</span> and learnt
              that portfolio can help me to show off my skills. It might make it
              easy to land a job, so this is where I got this idea to create
              this portfolio, which you read right now on :D
            </p>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default About;
