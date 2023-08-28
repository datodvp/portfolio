import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Window = ({ title, children }) => {
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      className="h-full m-auto w-[73%] z-10"
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full h-[80%] bg-white">
          <div className="flex items-center justify-between w-full px-6 h-14 bg-slate-900">
            <h2 className="text-3xl text-white">{title}</h2>
            <Link to="/">
              <div className="h-[70%] cursor-pointer rounded-xl w-10 bg-red-600 hover:bg-red-400 flex justify-center items-center text-white font-black text-3xl">
                X
              </div>
            </Link>
          </div>
          <section>{children}</section>
        </div>
      </div>
    </motion.div>
  );
};

export default Window;
