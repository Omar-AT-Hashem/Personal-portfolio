import weatherlyImage from "../assets/images/weatherlyImage.png";

const Portfolio = () => {
  type project = {
    id: number;
    thumbnail: string;
    demo: string;
    code: string;
  };

  const projects: project[] = [
    {
      id: 1,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/weatherly",
    },
    {
      id: 2,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/weatherly",
    },
    {
      id: 3,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    {
      id: 4,
      thumbnail: weatherlyImage,
      demo: "https://weathery11.netlify.app",
      code: "https://github.com/Omar-AT-Hashem/Personal-portfolio",
    },
    
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto pt-36">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, thumbnail, demo, code }: project) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a target="_blank" href={demo} rel="noreferrer">
                <img
                  src={thumbnail}
                  alt="thumbnail image"
                  className="rounded-md duration-100 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                <a target="_blank" href={demo} rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a target="_blank" href={code} rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
