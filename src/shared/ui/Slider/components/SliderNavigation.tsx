import React from "react";
import { Button } from "@shared/ui/Button";
import { SliderNavigationPosition } from "@shared/ui/Slider/Slider";
import clx from "classnames";
import ArrowLeftIcon from "@/shared/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg";
import "./SliderNavigation.scss";

interface SliderNavigationProps {
  className?: string;

  position?: SliderNavigationPosition;
  isHiddenTablet?: boolean;

  prevButtonRef?: React.Ref<HTMLButtonElement>;
  nextButtonRef?: React.Ref<HTMLButtonElement>;
}

export const SliderNavigation = React.forwardRef<HTMLDivElement, SliderNavigationProps>((props, ref) => {
  const { className, position, isHiddenTablet = false, prevButtonRef, nextButtonRef } = props;

  return (
    <div
      className={clx(className, "slider-navigation", {
        [`slider-navigation_${position}`]: position,
        "hidden-tablet-down": isHiddenTablet,
      })}
      ref={ref}
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button_prev"
        ref={prevButtonRef}
        icon={ArrowLeftIcon}
      />
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button_next"
        ref={nextButtonRef}
        icon={ArrowRightIcon}
        iconPosition="after"
      />
    </div>
  );
});
