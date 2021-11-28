import { ComponentType } from "react";
import { Redirect } from "react-router";

import { Menu } from "../pages"

interface Route {
  name: string;
  path: string;
  to: string;
  component: ComponentType;
}

export const privateRoutes: Route[] = [
  {
    name: "Menu",
    path: "/",
    to: "/",
    component: () => {
      return <Redirect to="/menu"/>
    },
  },
  {
    name: "Menu",
    path: "/menu",
    to: "/menu",
    component: Menu
  },
];