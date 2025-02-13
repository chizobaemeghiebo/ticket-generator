import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import arrowRight from "../assets/images/arrow-right.png";
const Nav = () => {
  return (
    <nav className="py-6 relative z-50">
      <div className="container bg-transparent max-w-[1200px] w-[90%] mx-auto flex items-center justify-between px-4 py-3 border-2 border-border rounded-3xl">
        <img src={logo} alt="logo image" />
        <ul className="hidden lg:flex lg:items-center lg:justify-around lg:gap-4">
          <li>
            <Link to="/" className="font-accent text-white text-lg">
              Events
            </Link>
          </li>
          <li>
            <Link to="/" className="font-accent text-light text-lg">
              My Tickets
            </Link>
          </li>
          <li>
            <Link to="/" className=" font-accent text-light text-lg">
              About Projects
            </Link>
          </li>
        </ul>
        <Link
          to="/"
          className="flex items-center gap-2 bg-white text-dark font-accent lg:px-6 px-3 py-4 rounded-xl uppercase text-sm lg:text-base"
        >
          My Tickets
          <span>
            <img src={arrowRight} alt="my tickets" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
