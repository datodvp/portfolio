import Card from './Card';
import ImageSkills from '../../assets/images/skills.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const SkillsCard = () => {
  const location = useLocation();
  const [isChosen, setIsChosen] = useState(false);

  if (location.pathname === '/skills' && !isChosen) {
    setIsChosen(true);
  } else if (location.pathname !== '/skills' && isChosen) {
    setIsChosen(false);
  }

  return <Card image={ImageSkills} text="Skills" isChosen={isChosen}></Card>;
};

export default SkillsCard;
