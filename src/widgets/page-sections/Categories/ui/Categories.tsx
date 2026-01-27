import React from "react";

import { Section } from "@shared/ui/Section";
import { SliderNavigation } from "@shared/ui/Slider/components/SliderNavigation";
import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import { Slider } from "@/shared/ui/Slider/Slider";

const categoryItems = [
  {
    title: "Action",
  },
  {
    title: "Adventure",
  },
  {
    title: "Comedy",
  },
  {
    title: "Drama",
  },
  {
    title: "Horror",
  },
  {
    title: "Drama",
  },
  {
    title: "Horror",
  },
];

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
        {categoryItems.map(({ title }) => (
          <CategoryCard title={title} />
        ))}
      </Slider>
    </Section>
  );
};
