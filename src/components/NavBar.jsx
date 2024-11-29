import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const NavBar = () => {
  const location = useLocation(); // useLocation returns an object
  const currentPath = location.pathname; // Access the pathname property

  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`${
            link.path === currentPath &&
            "text-green-300 border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all` }
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
