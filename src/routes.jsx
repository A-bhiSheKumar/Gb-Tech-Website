import { Home, Profile } from "@/pages";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "About",
    href: "/about",
    target: "_blank",
    element: "",
  },
];

export default routes;
