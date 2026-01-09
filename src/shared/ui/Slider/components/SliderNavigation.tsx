import React from "react";
import { Button } from "@shared/ui/Button";
import clx from "classnames";
import ArrowLeftIcon from "@/shared/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg";
import "./SliderNavigation.scss";

interface SliderNavigationProps {
  className?: string;

  prevButtonRef?: React.Ref<HTMLButtonElement>;
  nextButtonRef?: React.Ref<HTMLButtonElement>;
}

export const SliderNavigation = React.forwardRef<HTMLDivElement, SliderNavigationProps>(
  (props, ref) => {
    const { className, prevButtonRef, nextButtonRef } = props;

    return (
      <div className={clx(className, "slider-navigation")} ref={ref}>
        <Button
          className="slider-navigation__arrow-button slider-navigation__arrow-button_prev"
          ref={prevButtonRef}
          mode="black-10"
          icon={ArrowLeftIcon}
          label="Previous slide"
          isLabelVisible={false}
        />
        <Button
          className="slider-navigation__arrow-button slider-navigation__arrow-button_next"
          ref={nextButtonRef}
          mode="black-10"
          icon={ArrowRightIcon}
          label="Previous slide"
          isLabelVisible={false}
        />
      </div>
    );
  }
);
