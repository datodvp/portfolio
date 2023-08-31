import { useLocation } from 'react-router-dom';
import ImageProjects from '../../assets/images/work.png';
import Card from './Card';
import { useState } from 'react';

const ProjectsCard = () => {
  const location = useLocation();
  const [isChosen, setIsChosen] = useState(false);

  if (location.pathname === '/projects' && !isChosen) {
    setIsChosen(true);
  } else if (location.pathname !== '/projects' && isChosen) {
    setIsChosen(false);
  }

  return (
    <Card image={ImageProjects} text="My Projects" isChosen={isChosen}></Card>
  );
};

export default ProjectsCard;
