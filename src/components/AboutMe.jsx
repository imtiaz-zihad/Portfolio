import { Helmet } from "react-helmet";

const About = () => {
    return (
      <div className="px-4 py-10 bg-gray-900 text-white">
        <Helmet>
        <title>About Me</title>
      </Helmet>
        <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-800 text-gray-300 rounded-xl shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:border-4 hover:border-accent">
          <h1 className="text-4xl font-bold text-accent text-center mb-6 animate__animated animate__fadeIn">
            About Me
          </h1>
          <p className="text-base sm:text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            Hello, I'm Imtiaz, a passionate learner and programmer currently studying at Daffodil International University. My journey
            with programming began with C, and I found the problem-solving aspect of coding fascinating. Since then, I've expanded my
            knowledge to C++ and am exploring various algorithms and data structures. I enjoy the challenge of competitive programming
            and continuously improving my skills.
          </p>
          <p className="text-base sm:text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
            Apart from programming, I also enjoy outdoor activities like playing football and drawing. I believe that these hobbies
            allow me to relax and boost my creativity, which in turn helps me approach programming challenges with a fresh perspective.
          </p>
          <p className="text-base sm:text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
            I always strive to stay curious, keep learning, and try new things. I'm excited about the future and all the possibilities
            that come with it!
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  