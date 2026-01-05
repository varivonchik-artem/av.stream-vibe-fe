import { getRouteMain } from "@shared/routes";
import { Logo } from "@shared/ui/Logo";
import clx from "classnames";

import "./Header.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const menuItems = [
    {
      label: "Home",
      href: getRouteMain(),
    },
  ];

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo linkProps={{ className: "header__logo" }} imageProps={{ loading: "eager" }} />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    clx("header__menu-link", { "header__menu-link_active": isActive })
                  }
                  to={href}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
