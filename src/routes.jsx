import { Home, Profile, SignIn, SignUp } from "@/pages";

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
    name: "Team",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Contact",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "About",
    href: "/about",
    target: "_blank",
    element: "",
  },
];

export default routes;
