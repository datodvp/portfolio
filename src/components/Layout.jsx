import { Link, Outlet, Route } from 'react-router-dom';
import ImageDesktop from '../assets/images/desktop.png';
import Navbar from './Navbar';
import AboutCard from '../components/Cards/AboutCard';
import ProjectsCard from '../components/Cards/ProjectsCard';
import SkillsCard from '../components/Cards/SkillsCard';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Layout = () => {
  const location = useLocation();

  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === '/' && !isHome) {
      setIsHome(true);
    } else if (location.pathname !== '/' && isHome) {
      setIsHome(false);
    }
  }, [location]);

  return (
    <main
      className="relative flex flex-col w-screen h-screen overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${ImageDesktop})` }}
    >
      <section
        className={
          'absolute top-[50%] duration-300 left-[50%] translate-x-[-50%] w-full translate-y-[-50%] flex gap-11 flex-wrap justify-center ' +
          (!isHome &&
            'translate-x-[-92%] top-[40%] flex-col items-center scale-50')
        }
      >
        <Link to="/about">
          <AboutCard />
        </Link>

        <Link to="/projects">
          <ProjectsCard />
        </Link>

        <Link to="/skills">
          <SkillsCard />
        </Link>
      </section>

      <Outlet />
      <Navbar />
    </main>
  );
};

export default Layout;
