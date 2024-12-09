import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/imtiaz-zihad" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/imtiaz-hossen/" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/mdimtiazzihad/" },
  { icon: <FaTwitter />, path: "https://x.com/MdImtiazHo74218" },
];

const Social = () => {
  return (
    <div className="flex gap-6 items-center justify-center pt-4 pb-12 lg:pb-0 lg:pt-0">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-transparent border-2 border-accent rounded-full text-accent hover:transition-all duration-500 hover:text-white hover:bg-accent"
        >
          <div className="text-2xl flex gap-6 items-center justify-center">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Social;
