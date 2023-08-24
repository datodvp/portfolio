const Card = ({ children }) => {
  return (
    <div className="w-[340px] h-[300px] bg-primary-green hover:scale-90 duration-200 hover:shadow-2xl hover:border-orange-400 cursor-pointer border-primary-orange border-2 rounded-[3rem] ">
      {children}
    </div>
  );
};

export default Card;
