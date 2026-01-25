import clx from "classnames";
import { NavLink } from "react-router-dom";
import "./NavigationMenu.scss";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  ariaLabel?: string;

  listDirection?: "row" | "column";
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { items, className, ariaLabel = "Navigation", listDirection = "row" } = props;

  return (
    <nav className={clx("navigation-menu", className)} aria-label={ariaLabel}>
      <ul className={clx("navigation-menu__list", `navigation-menu__list--${listDirection}`)}>
        {items.map(({ label, href }, index) => (
          <li className="navigation-menu__item" key={index}>
            <NavLink
              className={({ isActive }) =>
                clx("navigation-menu__link", {
                  "navigation-menu__link_active": isActive,
                })
              }
              to={href}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
