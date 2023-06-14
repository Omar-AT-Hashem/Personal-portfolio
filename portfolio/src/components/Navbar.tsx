import { FC, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: FC = () => {
  type navbarLink = {
    id: number;
    link: string;
  };

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
      link: "Experience",
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
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav((prevNav) => !prevNav)}
        className="text-gray-500 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      
        <ul className={nav? "flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen  bg-gradient-to-b from-black to-gray-500 duration-500" : "flex flex-col justify-center items-center absolute top-0 left-full w-screen h-screen  bg-gradient-to-b from-black to-gray-500 duration-500"}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-4 cursor-pointer text-4xl hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Navbar;
