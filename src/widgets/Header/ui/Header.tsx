import { getRouteMain } from "@shared/routes";
import { Button } from "@shared/ui/Button";
import { Logo } from "@shared/ui/Logo";
import clx from "classnames";
import { NavLink } from "react-router-dom";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import SearchIcon from "@/shared/assets/icons/search.svg";

import "./Header.scss";

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
        <div className="header__actions">
          <Button
            label="Search"
            isLabelVisible={false}
            icon={SearchIcon}
            iconPosition="before"
            title="Search"
            aria-label="Search"
            mode="transparent"
          />
          <Button
            label="Search"
            isLabelVisible={false}
            icon={NotificationIcon}
            iconPosition="before"
            title="Search"
            aria-label="Search"
            mode="transparent"
          />
        </div>
      </div>
    </header>
  );
};
