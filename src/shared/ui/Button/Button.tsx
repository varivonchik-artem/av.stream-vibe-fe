import React from "react";
import { Icon } from "@shared/ui/Icon";
import clx from "classnames";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  className?: string;

  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "before" | "after";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    icon,
    iconPosition = "before",
    "aria-label": buttonAriaLabel,
    type = "button",
    ...rest
  } = props;

  const iconNode = icon ? <Icon className="button__icon" Svg={icon} /> : null;

  return (
    <button className={clx(className, "button")} type={type} ref={ref} aria-label={buttonAriaLabel} {...rest}>
      {iconPosition === "before" && iconNode}
      {children}
      {iconPosition === "after" && iconNode}
    </button>
  );
});
