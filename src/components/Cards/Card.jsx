const Card = ({ image, text, isChosen }) => {
  return (
    <div
      className={`${
        isChosen && 'bg-primary-orange'
      } w-[340px] h-[300px] flex flex-col justify-center items-center gap-2 bg-primary-green hover:scale-90 duration-200 hover:shadow-2xl hover:border-orange-400 cursor-pointer border-primary-orange border-2 rounded-[3rem] `}
    >
      <img src={image} alt="projects logo" className="w-[10rem] h-[10rem] " />
      <h3 className="text-3xl font-bold text-white">{text}</h3>
    </div>
  );
};

export default Card;
