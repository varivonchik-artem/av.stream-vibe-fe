import React from "react";
import "./Logo.scss";
import { getRouteMain } from "@shared/routes/router";

import clx from "classnames";
import { Link, LinkProps } from "react-router-dom";
import logoIcon from "@/shared/assets/icons/logo.svg?url";

interface LogoProps {
  linkProps?: Omit<LinkProps, "to"> & {
    className?: string;
  };
  imageProps?: React.HTMLAttributes<HTMLImageElement> & {
    loading?: "eager" | "lazy";
  };
}

export const Logo = (props: LogoProps) => {
  const {
    linkProps: { className, ...linkProps } = {},
    imageProps: { loading = "lazy", ...imageProps } = {},
  } = props;

  return (
    <Link
      className={clx(className, "logo")}
      to={getRouteMain()}
      title="Home"
      aria-label="Home"
      {...linkProps}
    >
      <img
        className="logo__image"
        src={logoIcon}
        alt="logo"
        height={60}
        width={199}
        loading={loading}
        {...imageProps}
      />
    </Link>
  );
};
