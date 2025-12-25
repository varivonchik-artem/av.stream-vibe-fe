import "./Header.scss"
import { Logo } from "@/components/Logo/index.js"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
      </div>
    </header>
  )
}
