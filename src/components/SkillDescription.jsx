const SkillDescription = ({ image, name, description, color }) => {
  return (
    <div
      className={`${color} flex items-center duration-200 gap-2 p-4 bg-opacity-50 hover:bg-opacity-100`}
    >
      <img src={image} alt="javascript" className="object-contain w-20 h-20" />
      <div>
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default SkillDescription;
