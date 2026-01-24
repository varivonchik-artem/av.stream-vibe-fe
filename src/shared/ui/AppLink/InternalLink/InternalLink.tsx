import React from "react";
import clx from "classnames";
import { Link, LinkProps } from "react-router-dom";

interface InternalLinkProps extends LinkProps {
  children: React.ReactNode;

  "aria-label"?: string;

  className?: string;
}

export const InternalLink: React.FC<InternalLinkProps> = React.memo((props: InternalLinkProps) => {
  const { children, "aria-label": ariaLabel, className, to, ...rest } = props;

  const hasTextualChildren = typeof children === "string" || typeof children === "number";
  const computedAriaLabel = hasTextualChildren ? undefined : ariaLabel;

  return (
    <Link className={clx(className, "internal-link")} to={to} aria-label={computedAriaLabel} {...rest}>
      {children}
    </Link>
  );
});
