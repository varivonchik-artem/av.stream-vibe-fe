import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ReactNode } from "react";
import { SliderNavigation } from "@shared/ui/Slider/components/SliderNavigation";
import classNames from "classnames";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 2,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
};

interface SliderProps {
  children: ReactNode[];
  sliderParams?: typeof defaultSliderParams;
  isBeyondTheViewportOnMobileS?: boolean;
  hasScrollbarOnMobile?: boolean;
  navigationPosition?: "" | "abs-bottom";
  isNavigationHiddenMobile?: boolean;
}

export const Slider = ({
  children,
  sliderParams = defaultSliderParams,
  isBeyondTheViewportOnMobileS,
  hasScrollbarOnMobile = true,
  navigationPosition = "",
  isNavigationHiddenMobile = true,
}: SliderProps) => {
  return (
    <div
      className={classNames("slider", {
        "slider--beyond-the-viewport-on-mobile-s": isBeyondTheViewportOnMobileS,
      })}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        {...sliderParams}
        navigation={{
          prevEl: ".slider-navigation__arrow-button--previous",
          nextEl: ".slider-navigation__arrow-button--next",
        }}
        pagination={{
          el: ".slider-navigation__pagination",
          clickable: true,
        }}
        scrollbar={hasScrollbarOnMobile ? { el: ".slider__scrollbar", draggable: true } : false}
        className="slider__swiper"
      >
        {children.map((slide, index) => (
          <SwiperSlide key={index} className="slider__item">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderNavigation
        className="slider__navigation"
        position={navigationPosition}
        isHiddenMobile={isNavigationHiddenMobile}
      />

      {hasScrollbarOnMobile && <div className="slider__scrollbar visible-mobile" />}
    </div>
  );
};
