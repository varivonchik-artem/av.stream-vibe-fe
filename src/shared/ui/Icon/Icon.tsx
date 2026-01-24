import React from "react";
import clx from "classnames";
import "./Icon.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  "aria-label"?: string;

  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  className?: string;

  hasFill?: boolean;
}

export const Icon: React.FC<IconProps> = React.memo((props: IconProps) => {
  const { className, hasFill = false, Svg, "aria-label": ariaLabel, ...rest } = props;

  const isIconAriaHidden = rest["aria-hidden"] ?? !ariaLabel;

  const fill = hasFill ? "currentColor" : "none";
  const stroke = hasFill ? "none" : "currentColor";

  return (
    <Svg
      fill={fill}
      stroke={stroke}
      className={clx(className, "icon")}
      aria-hidden={isIconAriaHidden}
      aria-label={ariaLabel}
      {...rest}
    />
  );
});
