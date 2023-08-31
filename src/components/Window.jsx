import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Window = ({ title, children }) => {
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      className="h-[90%] m-auto w-[100%] md:w-[73%] z-10"
    >
      <div className="flex justify-center w-full h-full md:items-center">
        <div className="w-full h-full md:h-[80%] bg-white">
          <div className="flex items-center justify-between w-full px-6 h-[7.5%] bg-slate-900">
            <h2 className="text-2xl text-white md:text-3xl">{title}</h2>
            <Link to="/">
              <div className="h-[70%] cursor-pointer rounded-xl w-10 bg-red-600 hover:bg-red-400 flex justify-center items-center text-white font-black text-3xl">
                X
              </div>
            </Link>
          </div>
          <section className="h-[92.5%] overflow-auto">{children}</section>
        </div>
      </div>
    </motion.div>
  );
};

export default Window;
