import { Navigate, useRoutes } from "react-router-dom";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Page404 from "./pages/page404";
import Porfolio from "./pages/porfolio";
import About from "./pages/about";
import Calligraphy from "./pages/calligraphy";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Homepage />
      // children: [
      //   {
      //     path: "messages",
      //     element: <DashboardMessages />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
    },
    { path: '/about-me', element: <About /> },
    { path: '/porfolio', element: <Porfolio /> },
    { path: '/calligraphy', element: <Calligraphy /> },
    { path: '/contact', element: <Contact /> },
    { path: '/404', element: <Page404 /> },
    { path: '/*', element: <Navigate to="/404" replace /> },
  ]);
  return element;
} 
