import React from "react";
import "swiper/css";
import "./Slider.scss";
import clx from "classnames";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SliderProps {
  className?: string;
  children?: React.ReactNode[];

  slidesPerView?: number;
  slidesPerGroup?: number;

  prevButtonRef?: React.RefObject<HTMLButtonElement>;
  nextButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const Slider = ({
  children,
  className,
  slidesPerView = 1,
  slidesPerGroup = 1,
  prevButtonRef,
  nextButtonRef,
}: SliderProps) => {
  const internalPrevRef = React.useRef<HTMLButtonElement>(null);
  const internalNextRef = React.useRef<HTMLButtonElement>(null);

  const prevRef = prevButtonRef || internalPrevRef;
  const nextRef = nextButtonRef || internalNextRef;

  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);

  React.useEffect(() => {
    if (
      swiperInstance &&
      typeof swiperInstance.params.navigation !== "boolean" &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className={clx(className, "slider")}>
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={20}
      >
        {children.map((slide, index) => (
          <SwiperSlide className="slider__item" key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
