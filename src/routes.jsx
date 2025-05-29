import { Home } from "@/pages";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },

  {
    name: "About",
    href: "/about",
    target: "_blank",
    element: "",
  },
];

export default routes;
