import clx from "classnames";
import { Link } from "react-router-dom";
import LogoImage from "@/shared/assets/icons/logo.svg?url";
import "./Logo.scss";

interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  const { className, ...rest } = props;

  return (
    <Link className={clx(className, "logo")} to="/" aria-label="Go to homepage" {...rest}>
      <img className="logo__image" src={LogoImage} alt="" height={60} width={199} />
    </Link>
  );
};
