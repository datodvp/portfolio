import AboutCard from '../components/Cards/AboutCard';
import ProjectsCard from '../components/Cards/ProjectsCard';
import SkillsCard from '../components/Cards/SkillsCard';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <section className="flex flex-wrap justify-center gap-11">
        <AboutCard />
        <ProjectsCard />
        <SkillsCard />
      </section>
    </div>
  );
};

export default Home;
