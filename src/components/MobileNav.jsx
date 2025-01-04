/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MobileNav = ({ closeMenu }) => {
  return (
    <ul className="text-white space-y-4">
      <li>
        <Link to="/" onClick={closeMenu} className="hover:text-accent">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={closeMenu} className="hover:text-accent">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={closeMenu} className="hover:text-accent">
          About
        </Link>
      </li>
      <li>
        <Link to="/skill" onClick={closeMenu} className="hover:text-accent">
          Skill
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={closeMenu} className="hover:text-accent">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MobileNav;
