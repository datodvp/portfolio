import { Outlet } from 'react-router-dom';
import ImageDesktop from '../assets/images/desktop.png';
import StartMenu from './StartMenu';

const Layout = () => {
  return (
    <main
      className="flex flex-col w-screen h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${ImageDesktop})` }}
    >
      <Outlet />
      <StartMenu />
    </main>
  );
};

export default Layout;
