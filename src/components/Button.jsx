const Button = ({ children, bg = "bg-transparent" }) => {
  return (
    <div
      className={`${bg} lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter`}
    >
      {children}
    </div>
  );
};

export default Button;
