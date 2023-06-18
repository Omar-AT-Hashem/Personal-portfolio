import jsIcon from "../assets/images/jsIcon.png";
import tsIcon from "../assets/images/tsIcon.png";
import cssIcon from "../assets/images/cssIcon.png";
import nodeIcon from "../assets/images/nodeIcon.png";
import nextIcon from "../assets/images/nextjsIcon.png";
import tailwindIcon from "../assets/images/cssIcon.png";
import htmlIcon from "../assets/images/htmlIcon.png";
import reactIcon from "../assets/images/reactIcon.png";

const Skills = () => {
  type skill = {
    id: number;
    title: string;
    src: string;
    style: string;
  };

  const skills: skill[] = [
    {
      id: 1,
      title: "HTML",
      src: htmlIcon,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: cssIcon,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "Javascript",
      src: jsIcon,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "Typescript",
      src: tsIcon,
      style: "shadow-blue-500",
    },
    {
      id: 5,
      title: "Node",
      src: nodeIcon,
      style: "shadow-green-500 ",
    },
    {
      id: 6,
      title: "React",
      src: reactIcon,
      style: "shadow-blue-400",
    },
    {
      id: 7,
      title: "Tailwind",
      src: tailwindIcon,
      style: "shadow-sky-400",
    },
    {
      id: 8,
      title: "Next",
      src: nextIcon,
      style: "shadow-white ",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to to-black w-full h-auto pt-36">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white blue">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, title, src, style }: skill) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
