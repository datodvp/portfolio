import Window from '../components/Window';
import ImageMan from '../assets/images/man.png';
import IconCopy from '../assets/images/copy.svg';
import ImageGmail from '../assets/images/gmail.png';

const About = () => {
  return (
    <Window title="About Me">
      <div className="flex h-full">
        <div className="w-[30%] flex flex-col items-center mt-5 gap-3">
          <img
            src={ImageMan}
            alt="man"
            className="w-[50%] border border-black mb-5"
          />
          <div className="flex items-center gap-5 p-4 text-lg duration-150 border border-black cursor-pointer hover:bg-slate-300">
            <img src={ImageGmail} alt="gmail" className="w-8 h-8" />

            <p>datogagua98@gmail.com</p>

            <img src={IconCopy} alt="copy" className="scale-150" />
          </div>
        </div>
        <div className="w-[70%] bg-green-700 "></div>
      </div>
    </Window>
  );
};

export default About;
