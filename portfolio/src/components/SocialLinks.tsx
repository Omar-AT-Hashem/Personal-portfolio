import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import socialLink from "../models/socialLink";

const SocialLinks = () => {
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
    <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {socialLinks.map((link: socialLink) => (
          <li
            key={link.id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 "
          >
            <a
              download={link.download}
              target="_blank"
              href={link.href}
              rel="noreferrer"
              className="flex justify-between w-full items-center text-white"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
