const links = [
  { name: "home", id: "home" },
  { name: "about me", id: "about" },
  { name: "skill", id: "skill" },
  { name: "projects", id: "projects" },
  { name: "education", id: "education" },
  { name: "contact", id: "contact" },
];

const NavBar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Get the position of the section relative to the document
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80; // Subtract the navbar height (80px)
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth', // Ensure smooth scrolling
      });
    }
  };

  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleScroll(link.id)}
          className="capitalize font-medium hover:text-accent transition-all"
        >
          {link.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
