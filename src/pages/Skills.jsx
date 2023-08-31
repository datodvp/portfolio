import Window from '../components/Window';
import SkillDescription from '../components/SkillDescription';
import ImageJavascript from '../assets/images/javascript.png';
import ImageHtml from '../assets/images/html.png';
import ImageCss from '../assets/images/css.png';
import ImageReact from '../assets/images/react.png';
import ImageGit from '../assets/images/git.png';
import ImageTailwind from '../assets/images/tailwind.svg';
import ImageVue from '../assets/images/vue.png';
import ImagePhp from '../assets/images/php.png';
import ImageLaravel from '../assets/images/laravel.svg';

const Skills = () => {
  return (
    <Window title="Skills">
      <div className="flex flex-col gap-2 p-1">
        <SkillDescription
          image={ImageJavascript}
          name="Javascript"
          description="I believe I've a deep knowledge as it was my first programming language and working on it for a long time."
          color="bg-yellow-200"
        />
        <SkillDescription
          image={ImagePhp}
          name="PHP"
          description="My main goal for learning PHP was to explore Laravel and backend development."
          color="bg-sky-200"
        />
        <SkillDescription
          image={ImageReact}
          name="React"
          description="React is my first framework after I heard about front-end and decided to learn it."
          color="bg-cyan-200"
        />
        <SkillDescription
          image={ImageVue}
          name="Vue"
          description="This framework was part of my Internship, and I believe I can build very complex applications."
          color="bg-green-300"
        />
        <SkillDescription
          image={ImageLaravel}
          name="Laravel"
          description="Laravel was part of my internship and I really enjoyed that. It was easy to learn and I believe i can build REST API's and also full fledged WEB sites."
          color="bg-red-200"
        />
        <SkillDescription
          image={ImageTailwind}
          name="Tailwind"
          description="I enjoy working with Tailwind, I believe it makes writing styles faster and comfortable."
          color="bg-sky-200"
        />
        <SkillDescription image={ImageHtml} name="HTML" color="bg-orange-200" />
        <SkillDescription image={ImageCss} name="CSS" color="bg-blue-200" />
        <SkillDescription image={ImageGit} name="Git" color="bg-red-200" />
      </div>
    </Window>
  );
};

export default Skills;
