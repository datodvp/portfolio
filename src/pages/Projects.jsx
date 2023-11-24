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
import MovieQuotes from '../assets/images/projects/movie-quotes.jpg'

const Projects = () => {
  const data = new Map([
    ['Movie Quotes', {
      title: "Movie quotes",
      img: "../assets/images/projects/Movie-quotes.png",
      github: {
        front: "https://github.com/datodvp/movie-quotes-front",
        back: "https://github.com/datodvp/movie-quotes-back",
      },
      live: "https://movie-quotes.dato.com.ge",
      short_desc: "CRUD, Live updates(Pusher), Register, Google Auth, Language Translations",
      desc: "This is Social Network where you can Post, Like, Comment, Update and Delete. It also updated Likes and Comments Live from different users. You have update User profile picture or Username.",
      stack: [
        ImageVue,
        ImageLaravel,
        ImageTailwind
      ]
    }],
    ['Ecommerce', {
      title: "Ecommerce",
      github: {
        front: "https://github.com/datodvp/movie-quotes-front",
        back: "https://github.com/datodvp/movie-quotes-back"
      },
      live: "https://dato.com.ge",
      short_desc: "Ecommerce Project",
      desc: "In this app you can buy products. Also being admin you can ADD or REMOVE products UPDATE them. There is also Stripe payment",
      stack: [
        ImageLaravel,
        ImageReact,
      ]
    }]
  ])
  const [chosenProject, setChosenProject] = useState("Movie Quotes");
  return (
    <Window title="Projects">
      <div className="flex h-full">
        <div className='flex-[0.3] flex flex-col'>
          <div onClick={() => {
            setChosenProject("Movie Quotes")
          }}
          className={`cursor-pointer p-2 border-y-[2px] border-black ${chosenProject === "Movie Quotes" ? 'bg-slate-400' : 'hover:bg-slate-200'} `}>Movie Quotes</div>
          <div onClick={() => {
            setChosenProject("Ecommerce")
          }}
          className={`cursor-pointer p-2 border-b-[2px] border-black ${chosenProject === "Ecommerce" ? 'bg-slate-400 ' : 'hover:bg-slate-200'} `}>Ecommerce</div>
        </div>
        <div className='flex-1 bg-slate-200 p-3 text-black overflow-auto'>
          <div>
            <h1 className='text-center text-2xl font-bold mb-1 underline'>{data.get(chosenProject).title}</h1>
            <div className='flex justify-center gap-2 mb-2'>
              {data.get(chosenProject).stack.map((item, index) => {
                return <img src={item} key={index} width={30} height={30}/>
              })}
            </div>
          </div>
          <div className='flex justify-center'>
            {data.get(chosenProject).img && <img src={MovieQuotes} width={300} height={150} alt="" />}
          </div>
          <p className='mt-3 font-semibold'>{data.get(chosenProject).short_desc}</p>
          <p className='text-sm mt-3'>{data.get(chosenProject).desc}</p>
          <div>
            <div className='w-fit flex gap-2 mt-5'>
              <div>
                <a href={data.get(chosenProject).live} target='_blank' className='flex gap-2 bg-[#b84262] p-2 hover:bg-red-500 text-white rounded-md'><img src="https://cdn-icons-png.flaticon.com/512/7710/7710466.png" width={25} height={25} />Check Demo</a>
              </div>
              <div>
                <a href={data.get(chosenProject).github.back} target='_blank' className='flex gap-2 bg-[#42b883] p-2 hover:bg-[#5ecb9a] rounded-md text-white'><img src={IconGithub} width={25} height={25} />Backend</a>
              </div>
              <div>
                <a href={data.get(chosenProject).github.front} target='_blank' className='flex gap-2 bg-[#42b883] p-2 hover:bg-[#5ecb9a]   rounded-md text-white'><img src={IconGithub} width={25} height={25} />FrontEnd</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Projects;
