import React from "react";
import { Icon } from "@shared/ui/Icon";

import clx from "classnames";

import { Link, LinkProps } from "react-router-dom";

import "./AppLink.scss";

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode;

  className?: string;

  label?: string;
  isLabelVisible?: boolean;

  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "before" | "after";

  mode?: string;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    children,
    className,
    to,
    label,
    isLabelVisible = "true",
    icon,
    iconPosition = "before",
    mode = "",
    ...rest
  } = props;

  const iconNode = icon ? <Icon className="link__icon" Svg={icon} /> : undefined;

  return (
    <>
      <Link className={clx(className, "link", { [`link_${mode}`]: mode })} to={to} {...rest}>
        {iconPosition === "before" && iconNode}

        {isLabelVisible && <span className="link__label">{label}</span>}
        {children}

        {iconPosition === "after" && iconNode}
      </Link>
    </>
  );
};
