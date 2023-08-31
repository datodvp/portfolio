import IconShuriken from '../assets/images/shuriken.png';
import IconAboutMe from '../assets/images/personal-information.png';
import IconProjects from '../assets/images/clipboard.png';
import IconSkills from '../assets/images/skills2.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <section className="h-[4.5rem] overflow-hidden flex items-center border-t-4 border-primary-orange self-end w-full bg-primary-green">
      <div className="flex items-center h-full">
        <div className="flex items-center h-full">
          <button className="w-[5rem] group flex justify-center items-center">
            <img
              src={IconShuriken}
              alt="start menu"
              className="w-[3.12rem] group-focus:animate-spin-forwards group-focus:rotate-180 duration-300"
            />
          </button>
          <Link
            to="/about"
            className={`${
              location.pathname === '/about' &&
              'bg-green-900 border-b-4 border-primary-orange'
            } w-[5rem] hover:bg-green-800 focus:bg-green-900 focus:border-b-4 h-full hover:border-b-4 flex justify-center items-center border-primary-orange`}
          >
            <img src={IconAboutMe} alt="start menu" className="w-[3.12rem]" />
          </Link>
          <Link
            to="/projects"
            className={`${
              location.pathname === '/projects' &&
              'bg-green-900 border-b-4 border-primary-orange'
            } w-[5rem] hover:bg-green-800 focus:bg-green-900 focus:border-b-4 h-full hover:border-b-4 flex justify-center items-center border-primary-orange`}
          >
            <img src={IconProjects} alt="start menu" className="w-[3.12rem]" />
          </Link>
          <Link
            to="/skills"
            className={`${
              location.pathname === '/skills' &&
              'bg-green-900 border-b-4 border-primary-orange'
            } w-[5rem] hover:bg-green-800 focus:bg-green-900 focus:border-b-4 h-full hover:border-b-4 flex justify-center items-center border-primary-orange`}
          >
            <img src={IconSkills} alt="start menu" className="w-[3.12rem]" />
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Navbar;
