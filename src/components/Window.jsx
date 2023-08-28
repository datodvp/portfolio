import { Link } from 'react-router-dom';

const Window = ({ title, children }) => {
  return (
    <div className="h-full m-auto w-[73%]">
      <div className="w-full h-full">
        <div className="absolute top-10 w-[80%] h-[80%] bg-white">
          <div className="flex items-center justify-between w-full px-6 h-14 bg-slate-900">
            <h2 className="text-3xl text-white">{title}</h2>
            <Link to="/">
              <div className="h-[70%] cursor-pointer rounded-xl w-10 bg-red-600 flex justify-center items-center text-white font-black text-3xl">
                X
              </div>
            </Link>
          </div>
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
};

export default Window;
