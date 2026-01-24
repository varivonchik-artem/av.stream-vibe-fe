import React from "react";
import clx from "classnames";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href: string;

  "aria-label"?: string;

  className?: string;
}

export const ExternalLink = (props: ExternalLinkProps) => {
  const { children, "aria-label": ariaLabel, className, href, ...rest } = props;

  const hasTextualChildren = typeof children === "string" || typeof children === "number";
  const computedAriaLabel = hasTextualChildren ? undefined : ariaLabel;

  return (
    <a
      className={clx(className, "external-link")}
      href={href}
      aria-label={computedAriaLabel}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};
