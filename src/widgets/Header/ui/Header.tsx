import "./Header.scss";
import { Logo } from "@shared/ui/Logo";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo linkProps={{ className: "header__logo" }} imageProps={{ loading: "eager" }} />
      </div>
    </header>
  );
};
