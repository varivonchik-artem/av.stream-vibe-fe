import React from "react";

import { getRouteMain } from "@shared/routes";
import { BurgerButton } from "@shared/ui/BurgerButton";
import { Button } from "@shared/ui/Button";
import { Logo } from "@shared/ui/Logo";
import { HeaderFormModal } from "@widgets/Header/ui/mobile/HeaderFormModal";
import clx from "classnames";
import { NavLink } from "react-router-dom";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import SearchIcon from "@/shared/assets/icons/search.svg";

import "./Header.scss";

export const menuItems = [
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

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const isMainPage = location.pathname === getRouteMain();

  return (
    <header className={clx("header", { ["header_fixed"]: isMainPage })}>
      <div className="header__inner container">
        <Logo linkProps={{ className: "header__logo" }} imageProps={{ loading: "eager" }} />
        <nav className="header__menu hidden-tablet-landscape-down">
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
        <div className="header__actions hidden-tablet-landscape-down">
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
            title="Notifications"
            aria-label="Notifications"
            mode="transparent"
          />
        </div>

        <HeaderFormModal isOpen={isOpenModal} onClose={toggleModal} />
        <BurgerButton
          className={clx("header__burger-button hidden-tablet-landscape-up", {
            ["burger-button_active"]: isOpenModal,
          })}
          onClick={toggleModal}
        />
      </div>
    </header>
  );
};
