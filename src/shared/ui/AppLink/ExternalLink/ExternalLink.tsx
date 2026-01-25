import React from "react";
import { Icon } from "@shared/ui/Icon";
import clx from "classnames";
import "./ExternalLink.scss";

export enum ExternalLinkButtonMode {
  BLACK_10 = "mode-black-10",
}

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href: string;

  "aria-label"?: string;

  className?: string;

  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "before" | "after";

  buttonMode?: ExternalLinkButtonMode;
}

export const ExternalLink = (props: ExternalLinkProps) => {
  const {
    children,
    "aria-label": ariaLabel,
    className,
    href,
    icon,
    iconPosition = "before",
    buttonMode,
    ...rest
  } = props;

  const externalLinkClasses = clx(className, "external-link", {
    [`external-link_button external-link_button-${buttonMode}`]: buttonMode,
  });

  const iconNode = icon ? <Icon className="external-link__icon" Svg={icon} hasFill /> : null;

  return (
    <a
      className={externalLinkClasses}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {iconPosition === "before" && iconNode}
      {children}
      {iconPosition === "after" && iconNode}
    </a>
  );
};
