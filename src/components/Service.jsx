import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const Service = () => {
  const services = [
    {
      num: "01",
      title: "Front-End Development",
      description:
        "working on........................................................",
      useHref: "",
    },
    {
      num: "02",
      title: "Database Management",
      description:
        "working on........................................................",
      useHref: "",
    },
    {
      num: "03",
      title: "Programming",
      description:
        "working on........................................................",
      useHref: "",
    },
    {
      num: "04",
      title: "Software Development",
      description:
        "working on........................................................",
      useHref: "",
    },
  ];
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, indx) => {
            return (
              <Fade key={indx} duration={1000}>
                <div className="flex-1 flex flex-col justify-center gap-6 group">
                  {/* Top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500 group-hover:text-[#00ff99]">
                      {service.num}
                    </div>
                    <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* Heading */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  {/* Description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* Border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
