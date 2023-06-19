import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navbarLink from "../models/navbarLink";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const links: navbarLink[] = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="w-full h-20 bg-black flex justify-between items-center px-4">
      <h1 className="text-white text-5xl font-signature select-none">Omar</h1>

      <ul className="hidden md:flex">
        {links.map(({ id, link }: navbarLink) => (
          <li key={id} className="navbar-link">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav((prevNav) => !prevNav)}
        className="text-gray-500 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul
        className={
          nav
            ? "flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen  bg-gradient-to-b from-black via to-gray-600 duration-500"
            : "flex flex-col justify-center items-center absolute top-[-20%] left-full w-0 h-0  bg-gradient-to-b from-black to-gray-600 duration-500"
        }
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" text-white px-4 py-4 cursor-pointer text-4xl hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
