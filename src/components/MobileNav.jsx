/* eslint-disable react/prop-types */


const links = [
  { name: "home", id: "home" },
  // { name: "services", id: "services" },
  { name: "about me", id: "about" },
  { name: "skill", id: "skill" },
  { name: "projects", id: "projects" },
  { name: "education", id: "education" },
  { name: "contact", id: "contact" },
];

const MobileNav = ({ closeMenu }) => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <ul className="text-white space-y-4 flex flex-col">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleScroll(link.id)}
          className="capitalize font-medium hover:text-accent transition-all"
        >
          {link.name}<br />
        </button>
        
      ))}
      
    </ul>
  );
};

export default MobileNav;
