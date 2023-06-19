import myImage from "../assets/images/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      id="Home"
      className="h-auto pt-36 w-full bg-gradient-to-b
     from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have good knowledge of building web applications. Currently, I am
            enjoying working on web applications using technologies like React,
            Express.js and Next.js.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} classname="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="pt-20 md:pt-0">
          <img
            src={myImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
