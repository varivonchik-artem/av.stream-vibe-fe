import { getRouteMain } from "@shared/routes";

export const navigationMenuItems = [
  {
    label: "Home",
    href: getRouteMain(),
  },
  {
    label: "Movies & Shows",
    href: "/movies",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
  },
];
