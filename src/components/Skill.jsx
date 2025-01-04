import { useSpring, useTrail, animated } from "@react-spring/web";
import { Helmet } from "react-helmet";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiVite } from "react-icons/si";

const Skill = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 80, friction: 20 }, // Smooth animation
  });

  const skills = {
    Frontend: [
      { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
      {
        name: "HTML & CSS",
        level: 95,
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "JavaScript",
        level: 85,
        icon: <FaJs className="text-yellow-500" />,
      },
      {
        name: "CSS3",
        level: 80,
        icon: <FaCss3Alt className="text-blue-400" />,
      },
    ],
    Backend: [
      {
        name: "Node.js",
        level: 80,
        icon: <FaNodeJs className="text-green-500" />,
      },
      { name: "Express", level: 70 },
      {
        name: "MongoDB",
        level: 75,
        icon: <SiMongodb className="text-green-600" />,
      },
      { name: "MySQL", level: 70, icon: <SiMysql className="text-blue-600" /> },
    ],
    Tools: [
      {
        name: "Git",
        level: 95,
        icon: <FaGitAlt className="text-orange-500" />,
      },
      { name: "Vite", level: 80, icon: <SiVite className="text-green-400" /> },
      { name: "Webpack", level: 65 },
      { name: "Postman", level: 85 },
    ],
  };

  const categories = Object.entries(skills);

  // Trail animation for the cards
  const trail = useTrail(categories.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 100, friction: 20 }, // Smooth entry
  });

  return (
    <animated.div
      style={fadeIn}
      className="skill-section p-8 bg-gray-900 rounded-lg shadow-md"
    >
      <Helmet>
        <title>Skill</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trail.map((style, index) => {
          const [category, items] = categories[index];
          return (
            <animated.div
              key={category}
              style={style}
              className="skill-category p-6 bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map(({ name, level, icon }, idx) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const barAnimation = useSpring({
                    from: { width: "0%" },
                    to: { width: `${level}%` },
                    config: { tension: 80, friction: 20 }, // Smooth bar animation
                    delay: idx * 150, // Stagger for bars
                  });

                  return (
                    <div key={idx} className="skill-item">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center space-x-2">
                          {icon && (
                            <span className="text-xl text-white">{icon}</span>
                          )}
                          <span className="text-white font-medium">{name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <animated.div
                          style={barAnimation}
                          className="bg-blue-500 h-2.5 rounded-full"
                        ></animated.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </animated.div>
          );
        })}
      </div>
    </animated.div>
  );
};

export default Skill;
