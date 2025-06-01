import { Home } from "@/pages";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
{
    name: "Services",
    href: "/services",
    target: "_blank",
    element: "",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    target: "_blank",
    element: "",
  },
  {
    name: "About",
    href: "/about",
    target: "_blank",
    element: "",
  },
];

export default routes;
