import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import Home from "../components/Home";
import Service from "../components/Service";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Work from "../components/Work";

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
            path: '/resume',
            element: <Resume /> ,
        },
        {
            path: '/work',
            element: <Work /> ,
        },
        {
            path: '/contact',
            element: <Contact /> ,
        },
    ]
  },
]);

export default router;
