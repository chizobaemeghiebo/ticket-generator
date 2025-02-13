import { Link } from "react-router-dom";

const Button = ({
  pathname = "/get-tickets",
  children,
  bg = "bg-transparent",
  color = "text-lighter",
}) => {
  return (
    <Link
      to={`${pathname}`}
      type="submit"
      className={`${bg} lg:w-[47%] border-2 border-progressOuter font-accent text-base rounded-lg p-3 text-center ${color}`}
    >
      {children}
    </Link>
  );
};

export default Button;
