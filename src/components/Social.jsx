import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaWhatsapp />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
const Social = () => {
  return (
    <div className="flex gap-6 items-center justify-center">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className="w-14 h-14 flex items-center justify-center bg-transparent border-2 border-accent rounded-full text-accent hover:transition-all duration-500  hover:text-white hover:bg-accent"
          >
            <div className="text-2xl   flex gap-6 items-center justify-center">
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
