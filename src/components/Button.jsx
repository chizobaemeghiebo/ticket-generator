import { Link } from "react-router-dom";

const Button = ({
  pathname = "/get-tickets",
  children,
  bg = "bg-transparent",
}) => {
  return (
    <Link
      to={`${pathname}`}
      type="submit"
      className={`${bg} lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center text-lighter`}
    >
      {children}
    </Link>
  );
};

export default Button;
