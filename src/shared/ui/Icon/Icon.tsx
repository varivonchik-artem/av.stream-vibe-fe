import React from "react";
import clx from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;

  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  "aria-label"?: string;
}

export const Icon: React.FC<IconProps> = React.memo((props: IconProps) => {
  const { className, Svg, "aria-label": ariaLabel = undefined, ...rest } = props;

  const isIconAriaHidden = rest["aria-hidden"] ?? !ariaLabel;

  return <Svg className={clx(className, "icon")} aria-hidden={isIconAriaHidden} aria-label={ariaLabel} {...rest} />;
});
