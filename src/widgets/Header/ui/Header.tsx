import React from "react";

import "./Header.scss";
import { BurgerButton } from "@shared/ui/BurgerButton";
import { Button, ButtonMode } from "@shared/ui/Button";
import { Logo } from "@shared/ui/Logo";
import { NavigationMenu, NavigationMenuModal } from "@shared/ui/NavigationMenu";
import { navigationMenuItems } from "@widgets/Header/items/navigationMenuItems";
import clx from "classnames";
import NotificationsIcon from "@/shared/assets/icons/notification.svg";
import SearchIcon from "@/shared/assets/icons/search.svg";

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="skip-content hidden-tablet-landscape-down">
          <a className="skip-content__link" href="#main-content" aria-label="Skip to content">
            Skip to content
          </a>
        </div>
        <div className="header__inner container">
          <Logo className="header__logo" />
          <NavigationMenu className="header__menu hidden-tablet-landscape-down" items={navigationMenuItems} />
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
              onClick={toggleModal}
            />
            <BurgerButton
              className={clx("header__burger-button hidden-tablet-landscape-up", {
                ["burger-button_active"]: isOpenModal,
              })}
              onClick={toggleModal}
            />
          </div>
        </div>
      </header>
      <NavigationMenuModal isOpen={isOpenModal} onClose={toggleModal} />
    </>
  );
};
