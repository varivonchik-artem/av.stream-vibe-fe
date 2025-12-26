import "./Header.scss"
import { Logo } from "@/components/Logo/index.js"
import clx from "classnames"
import { Button } from "@/components/Button/index.js"
import { BurgerButton } from "@/components/BurgerButton/index.js"

export const Header = (props) => {
  const { url } = props

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
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
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
        <BurgerButton />
      </div>
    </header>
  )
}
