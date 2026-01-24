import React from "react";
import clx from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  "aria-label"?: string;

  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  className?: string;
}

export const Icon: React.FC<IconProps> = React.memo((props: IconProps) => {
  const { className, Svg, "aria-label": ariaLabel, ...rest } = props;

  const isIconAriaHidden = rest["aria-hidden"] ?? !ariaLabel;

  return <Svg className={clx(className, "icon")} aria-hidden={isIconAriaHidden} aria-label={ariaLabel} {...rest} />;
});
