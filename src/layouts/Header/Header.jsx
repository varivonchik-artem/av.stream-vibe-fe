import "./Header.scss"
import { Logo } from "@/components/Logo/index.js"
import clx from "classnames"
import { Button } from "@/components/Button/index.js"
import { BurgerButton } from "@/components/BurgerButton/index.js"

export const Header = (props) => {
  const { url, isFixed } = props

  const menuItems = [
    {
      label: "Home",
      href: "/",
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
  ]

  return (
    <header
      className={clx("header", {
        header_fixed: isFixed,
      })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={clx("header__menu-link", {
                      "header__menu-link_active": href === url,
                    })}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              iconName="search"
              mode="transparent"
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              iconName="notification"
              mode="transparent"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button hidden-tablet-landscape-up"
          extraAttrs={{
            "data-js-overlay-menu-burger-button": "",
          }}
        />
      </div>
    </header>
  )
}
