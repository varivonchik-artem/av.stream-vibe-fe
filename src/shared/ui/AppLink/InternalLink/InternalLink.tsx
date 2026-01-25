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

  return (
    <Link className={clx(className, "internal-link")} to={to} aria-label={ariaLabel} {...rest}>
      {children}
    </Link>
  );
});
