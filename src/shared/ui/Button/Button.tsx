import React from "react";
import { Icon } from "@shared/ui/Icon";
import clx from "classnames";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  type?: "button" | "submit" | "reset";

  label?: string;
  isLabelVisible?: boolean;

  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "before" | "after";

  mode?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    type = "button",
    label,
    isLabelVisible = "true",
    icon,
    iconPosition = "before",
    mode = "",
    ...rest
  } = props;

  const iconNode = icon ? <Icon Svg={icon} /> : undefined;

  return (
    <>
      <button
        className={clx(className, "button", { [`button_${mode}`]: mode })}
        type={type}
        {...rest}
      >
        {iconPosition === "before" && iconNode}

        {isLabelVisible && <span className="button__label">{label}</span>}

        {iconPosition === "after" && iconNode}
      </button>
    </>
  );
};
