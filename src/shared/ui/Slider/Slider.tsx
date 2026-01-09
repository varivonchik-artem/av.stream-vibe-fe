import React from "react";
import "swiper/css";
import "./Slider.scss";
import { SliderNavigation } from "@shared/ui/Slider/components/SliderNavigation";
import clx from "classnames";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

interface SliderProps {
  className?: string;
  children?: React.ReactNode;

  slidesPerView?: number;
  slidesPerGroup?: number;
}

export const Slider = ({
  children,
  className,
  slidesPerView = 1,
  slidesPerGroup = 1,
}: SliderProps) => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);
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
      <SliderNavigation prevButtonRef={prevRef} nextButtonRef={nextRef} />
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={20}
      >
        {children}
      </Swiper>
    </div>
  );
};
