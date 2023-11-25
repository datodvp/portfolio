import { useState } from 'react';
import Window from '../components/Window';
import ImageJavascript from '../assets/images/javascript.png';
import ImageHtml from '../assets/images/html.png';
import ImageCss from '../assets/images/css.png';
import ImageReact from '../assets/images/react.png';
import ImageGit from '../assets/images/git.png';
import ImageTailwind from '../assets/images/tailwind.svg';
import ImageVue from '../assets/images/vue.png';
import ImagePhp from '../assets/images/php.png';
import ImageLaravel from '../assets/images/laravel.svg';
import IconGithub from '../assets/images/github.svg';
import MovieQuotes from '../assets/images/projects/movie-quotes.png';
import IconMovieQuotes from '../assets/images/projects/movie-quotes-icon.ico';
import IconResumeCreator from '../assets/images/projects/resume-creator-icon.ico';
import ImageResumeCreator from '../assets/images/projects/resume-creator.png';

const Projects = () => {
  const data = [
    {
      title: 'Movie Quotes',
      img: MovieQuotes,
      github: {
        front: 'https://github.com/datodvp/movie-quotes-front',
        back: 'https://github.com/datodvp/movie-quotes-back',
      },
      live: 'https://movie-quotes.dato.com.ge',
      short_desc:
        'CRUD, Live updates(Pusher), Register, Google Auth, Language Translations',
      desc: 'This is Social Network where you can Post, Like, Comment, Update and Delete. Website also updates Likes and Comments Live from different users. You can update User profile picture or Username which will be affected everywhere in the app.',
      stack: [ImageVue, ImageLaravel, ImageTailwind],
      icon: IconMovieQuotes,
    },
    {
      title: 'Resume Creator',
      img: ImageResumeCreator,
      github: 'https://github.com/datodvp/resume-app.git',
      live: 'https://resume-creator.dato.com.ge',
      short_desc: 'formik, yup, sass and complex forms',
      desc: 'Interactive and fun resume creator with annoying validations and complex forms.',
      stack: [ImageReact, ImageHtml, ImageJavascript],
      icon: IconResumeCreator,
    },
  ];

  const [chosenProject, setChosenProject] = useState(0);

  return (
    <Window title="Projects">
      <div className="flex h-full">
        <div className="flex-[0.3] flex flex-col">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setChosenProject(index);
                }}
                className={`cursor-pointer flex items-center gap-2 p-2 border-b-[2px] border-b-black ${
                  chosenProject === index
                    ? 'bg-slate-400'
                    : 'hover:bg-slate-200'
                } `}
              >
                <img
                  src={item.icon}
                  width={20}
                  height={20}
                  className="object-contain"
                />{' '}
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="flex-1 p-3 overflow-auto text-black bg-slate-200">
          <div>
            <h1 className="mb-1 text-2xl font-bold text-center underline">
              {data[chosenProject].title}
            </h1>
            <div className="flex justify-center gap-2 mb-2">
              {data[chosenProject].stack.map((item, index) => {
                return <img src={item} key={index} width={30} height={30} />;
              })}
            </div>
          </div>
          <div className="flex justify-center">
            {data[chosenProject].img && (
              <img
                src={data[chosenProject].img}
                width={300}
                height={150}
                className="hover:scale-[2] transition-all rounded-md"
              />
            )}
          </div>
          <p className="mt-3 font-semibold">{data[chosenProject].short_desc}</p>
          <p className="mt-3 text-sm">{data[chosenProject].desc}</p>
          <div>
            <div className="flex gap-2 mt-5 w-fit">
              <div>
                <a
                  href={data[chosenProject].live}
                  target="_blank"
                  className="flex gap-2 bg-[#b84262] p-2 hover:bg-red-500 text-white rounded-md"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7710/7710466.png"
                    width={25}
                    height={25}
                  />
                  Check Demo
                </a>
              </div>
              {typeof data[chosenProject].github === 'object' ? (
                <>
                  <div>
                    <a
                      href={data[chosenProject].github.back}
                      target="_blank"
                      className="flex gap-2 bg-[#42b883] p-2 hover:bg-[#5ecb9a] rounded-md text-white"
                    >
                      <img src={IconGithub} width={25} height={25} />
                      Backend
                    </a>
                  </div>
                  <div>
                    <a
                      href={data[chosenProject].github.front}
                      target="_blank"
                      className="flex gap-2 bg-[#42b883] p-2 hover:bg-[#5ecb9a]   rounded-md text-white"
                    >
                      <img src={IconGithub} width={25} height={25} />
                      FrontEnd
                    </a>
                  </div>
                </>
              ) : (
                <div>
                  <a
                    href={data[chosenProject].github}
                    target="_blank"
                    className="flex gap-2 bg-[#42b883] p-2 hover:bg-[#5ecb9a]   rounded-md text-white"
                  >
                    <img src={IconGithub} width={25} height={25} />
                    Github
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Projects;
