import "./Header.scss";
import { Logo } from "@shared/ui/Logo";
import clx from "classnames";
import { NavLink } from "react-router-dom";
import { navigationMenuItems } from "../items/navigationMenuItems";
import { Button, ButtonMode } from "@shared/ui/Button";
import SearchIcon from "@/shared/assets/icons/search.svg";
import NotificationsIcon from "@/shared/assets/icons/notification.svg";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="skip-content">
          <a className="skip-content__link" href="#main-content" aria-label="Skip to content">
            Skip to content
          </a>
        </div>
        <div className="header__inner container">
          <Logo className="header__logo" />
          <nav className="header__menu" aria-label="Main navigation">
            <ul className="header__menu-list">
              {navigationMenuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <NavLink
                    className={({ isActive }) => clx("header__menu-link", { "header__menu-link_active": isActive })}
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
              className="header__button-search"
              title="Search"
              aria-label="Search"
              icon={SearchIcon}
              mode={ButtonMode.TRANSPARENT}
            />
            <Button
              className="header__button-notifications"
              title="Notifications"
              aria-label="Notifications"
              icon={NotificationsIcon}
              mode={ButtonMode.TRANSPARENT}
            />
          </div>
        </div>
      </header>
    </>
  );
};
