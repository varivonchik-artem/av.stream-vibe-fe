import React from "react";
import clx from "classnames";
import { Link, LinkProps } from "react-router-dom";
import { Icon } from "../../Icon";
import "./InternalLink.scss";

export enum InternalLinkButtonMode {
  BLACK_10 = "mode-black-10",
  RED_45 = "mode-red-45",
}

interface InternalLinkProps extends LinkProps {
  children?: React.ReactNode;

  "aria-label"?: string;

  className?: string;

  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "before" | "after";

  linkText?: string;
  isLinkTextVisible?: boolean;

  buttonMode?: InternalLinkButtonMode;
}

export const InternalLink: React.FC<InternalLinkProps> = React.memo((props: InternalLinkProps) => {
  const {
    children,
    "aria-label": ariaLabel,
    className,
    icon,
    iconPosition = "before",
    linkText,
    isLinkTextVisible = linkText ? true : false,
    buttonMode,
    to,
    ...rest
  } = props;

  const iconNode = icon ? <Icon className="internal-link__icon" Svg={icon} hasFill /> : null;

  return (
    <Link
      className={clx(className, "internal-link", {
        [`internal-link_button internal-link_button-${buttonMode}`]: buttonMode,
      })}
      to={to}
      aria-label={ariaLabel}
      {...rest}
    >
      {iconPosition === "before" && iconNode}
      {isLinkTextVisible && <span className="internal-link__label">{linkText}</span>}
      {children}
      {iconPosition === "after" && iconNode}
    </Link>
  );
});
