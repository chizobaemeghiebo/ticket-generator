const Card = ({ children }) => {
  return (
    <div className="border-2 border-border3 rounded-xl flex flex-col gap-3 font-display p-3 lg:w-[30%]">
      {children}
    </div>
  );
};

export default Card;
