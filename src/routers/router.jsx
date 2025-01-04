import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import Home from "../components/Home";
import Service from "../components/Service";
import Skill from "../components/Skill";

import Contact from "../components/Contact";
import Work from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
        {
            path: '/',
            element: <Home /> ,
        },
        {
            path: '/services',
            element: <Service /> ,
        },
        {
            path: '/skill',
            element: <Skill/> ,
        },
        {
            path: '/projects',
            element: <Projects /> ,
        },
        {
            path: '/about',
            element: <AboutMe /> ,
        },
        {
            path: '/contact',
            element: <Contact /> ,
        },
    ]
  },
]);

export default router;
