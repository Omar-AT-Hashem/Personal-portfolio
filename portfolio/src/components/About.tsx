const About = () => {
  return (
    <div
      id="About"
      className="w-full h-auto pt-20 md:pt-36 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-14">
          I am a passionate and dedicated full stack web developer with a strong
          drive to create innovative and dynamic digital experiences. With a
          solid foundation in both front-end and back-end technologies, I am
          committed to delivering high-quality solutions.
        </p>

        <br />

        <p className="text-xl mt-10">
          My journey as a web developer began with a fascination for the endless
          possibilities of the internet. Over the years, I have honed my skills
          in HTML, CSS, and JavaScript to craft captivating and responsive user
          interfaces. Simultaneously, I have delved into server-side programming
          languages such as Node.js and Python, along with frameworks like
          Express.js and Django, to develop robust and scalable back-end
          systems.
        </p>

        <p className="text-xl mt-10">
          Driven by a love for continuous learning, I am always eager to stay
          up-to-date with the latest industry trends and emerging technologies.
          I actively seek out opportunities to enhance my skill set and expand
          my knowledge base. Whether it's exploring new front-end frameworks or
          experimenting with back-end frameworks, I am committed to pushing the
          boundaries of my abilities to deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
