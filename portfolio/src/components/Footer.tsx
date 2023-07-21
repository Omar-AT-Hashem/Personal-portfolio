import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { BsFillPersonLinesFill } from "react-icons/bs";
import socialLink from "../models/socialLink";

const Footer = () => {
  const socialLinks: socialLink[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/omar-hashem-8b11b9232/",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Omar-AT-Hashem",
    },

    // {
    //   id: 3,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "./resume.pdf",
    //   download: true,
    // },
  ];

  return (
    <div className="px-4 py-2 pb-6 w-auto h-full bg-gradient-to-b from-gray-800 to-black border-t-2 ">
      <ul className="flex flex-row justify-center gap-32 sm:gap-80 max-w-screen-md mx-auto">
        {socialLinks.map((link: socialLink) => (
          <li key={link.id} className="text-white hover:scale-105 duration-300">
            <a
              download={link.download}
              target="_blank"
              href={link.href}
              rel="noreferrer"
              className=""
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
