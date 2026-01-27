import React from "react";
import { Icon } from "@shared/ui/Icon";
import clx from "classnames";
import "./Button.scss";

export enum ButtonMode {
  TRANSPARENT = "mode-transparent",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  className?: string;

  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "before" | "after";

  buttonText?: string;
  isButtonTextVisible?: boolean;

  mode?: ButtonMode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    icon,
    iconPosition = "before",
    buttonText,
    isButtonTextVisible = buttonText ? true : false,
    "aria-label": buttonAriaLabel,
    type = "button",
    mode,
    ...rest
  } = props;

  const iconNode = icon ? <Icon className="button__icon" Svg={icon} /> : null;

  const buttonClasses = clx(className, "button", {
    [`button_${mode}`]: mode,
  });

  return (
    <button className={buttonClasses} type={type} ref={ref} aria-label={buttonAriaLabel} {...rest}>
      {iconPosition === "before" && iconNode}
      {isButtonTextVisible && <span className="button__label">{buttonText}</span>}
      {children}
      {iconPosition === "after" && iconNode}
    </button>
  );
});
