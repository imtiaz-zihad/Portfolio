/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

// Links for navigation
const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = ({ closeMenu }) => {
  const location = useLocation(); // Get the current path

  return (
    <div className="flex flex-col items-center">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`block py-4 px-6 text-lg text-white hover:bg-gray-700 ${
            location.pathname === link.path ? "bg-gray-600" : ""
          }`}
          onClick={closeMenu} // Close the menu after clicking a link
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
