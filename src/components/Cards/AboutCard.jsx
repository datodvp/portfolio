import ImageFreelancer from '../../assets/images/freelancer.png';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';

const AboutCard = () => {
  const location = useLocation();
  const [isChosen, setIsChosen] = useState(false);

  if (location.pathname === '/about' && !isChosen) {
    setIsChosen(true);
  } else if (location.pathname !== '/about' && isChosen) {
    setIsChosen(false);
  }

  return (
    <Card image={ImageFreelancer} text="About Me" isChosen={isChosen}></Card>
  );
};

export default AboutCard;
