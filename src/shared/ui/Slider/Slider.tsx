import React from "react";
import "swiper/css";
import "./Slider.scss";
import clx from "classnames";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { SliderNavigation } from "./components/SliderNavigation";

export enum SliderNavigationPosition {
  ABS_BOTTOM = "abs-bottom",
}

interface SliderProps {
  className?: string;
  children?: React.ReactNode[];

  breakpoints?: SwiperOptions["breakpoints"];

  slidesPerView?: number;
  slidesPerGroup?: number;

  isNavigationInSlider?: boolean;
  isNavigationHiddenTablet?: boolean;
  navigationPosition?: SliderNavigationPosition;

  prevButtonRef?: React.RefObject<HTMLButtonElement>;
  nextButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const Slider = ({
  children,
  className,
  slidesPerView = 1,
  slidesPerGroup = 1,

  isNavigationInSlider = false,
  isNavigationHiddenTablet = false,
  navigationPosition,

  prevButtonRef,
  nextButtonRef,
}: SliderProps) => {
  const internalPrevRef = React.useRef<HTMLButtonElement>(null);
  const internalNextRef = React.useRef<HTMLButtonElement>(null);

  const prevRef = prevButtonRef || internalPrevRef;
  const nextRef = nextButtonRef || internalNextRef;

  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);

  React.useEffect(() => {
    if (swiperInstance && typeof swiperInstance.params.navigation !== "boolean" && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, prevRef, nextRef]);

  return (
    <div className={clx(className, "slider")}>
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      >
        {children.map((slide, index) => (
          <SwiperSlide className="slider__item" key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      {isNavigationInSlider && (
        <SliderNavigation
          position={navigationPosition}
          isHiddenTablet={isNavigationHiddenTablet}
          prevButtonRef={prevButtonRef}
          nextButtonRef={nextButtonRef}
        />
      )}
    </div>
  );
};
