import React from "react";

import { Section } from "@shared/ui/Section";
import { SliderNavigation } from "@shared/ui/Slider/components/SliderNavigation";
import { Slider } from "@/shared/ui/Slider/Slider";

export const Categories = () => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<SliderNavigation prevButtonRef={prevRef} nextButtonRef={nextRef} />}
      isActionHiddenOnMobile
    >
      <Slider slidesPerView={5} slidesPerGroup={5} prevButtonRef={prevRef} nextButtonRef={nextRef}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </Slider>
    </Section>
  );
};
