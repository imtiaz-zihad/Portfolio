import { FiDownload } from "react-icons/fi";
import Social from "./Social";

const Home = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row flex-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left">
            <span className="text-xl">Front-End Developer</span>
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
              <button className="btn bg-transparent text-accent border-2 border-accent uppercase gap-2 flex font-bold rounded-3xl hover:bg-accent  hover:text-black">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              <div className="">
                
                    <Social  />
                
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
