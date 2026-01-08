import { Button } from "@shared/ui/Button";
import classNames from "classnames";

import ArrowLeftIcon from "@/shared/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg";

interface SliderNavigationProps {
  className?: string;
  hasPagination?: boolean;
  mode?: "" | "tile";
  position?: "" | "abs-bottom";
  isHiddenMobile?: boolean;
}

export const SliderNavigation = ({
  className,
  hasPagination = true,
  mode = "",
  position = "",
  isHiddenMobile,
}: SliderNavigationProps) => {
  return (
    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        "hidden-mobile": isHiddenMobile,
      })}
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        icon={ArrowLeftIcon}
        label="Previous slide"
        isLabelVisible={false}
      />

      {hasPagination && <div className="slider-navigation__pagination" />}

      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        icon={ArrowRightIcon}
        label="Next slide"
        isLabelVisible={false}
      />
    </div>
  );
};
