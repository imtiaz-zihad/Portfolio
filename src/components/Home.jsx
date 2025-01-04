import { FiDownload } from "react-icons/fi";
import Social from "./Social";
import Photo from "./Photo";
import Stats from "./Stats";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Programmer", "Software Developer"],
    loop: 0,
  });
  return (
    <div className="h-full p-4">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row flex-center  justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl  lg:ml-2">{text}</span>
            <Cursor />
            <h1 className="text-[48px] lg:text-[80px] font-semibold">
              Hello I'm <br />
              <span className="text-accent">Imtiaz Hossen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* btn and social icon  */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Link
                to={
                  "https://docs.google.com/document/d/1EodzVR5a1Vlj1UvFNGlnq-XcQ71h8axs/edit?usp=sharing&ouid=112588574008087115426&rtpof=true&sd=true"
                }
                target="_blank"
              >
                <button className="btn bg-transparent text-accent border-2 border-accent uppercase gap-2 flex font-bold rounded-3xl hover:bg-accent  hover:text-black">
                  <span className="">Download CV</span>

                  <FiDownload className="text-xl" />
                </button>
              </Link>
              <div className="">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Home;
