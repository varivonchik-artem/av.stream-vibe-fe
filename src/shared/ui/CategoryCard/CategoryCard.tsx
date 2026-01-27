import clx from "classnames";
import { InternalLink } from "../AppLink/InternalLink";

import { Icon } from "../Icon";

import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg";
import FirstImage from "@/shared/assets/images/categories/comedy/1.jpg";
import SecondImage from "@/shared/assets/images/categories/comedy/2.jpg";
import TrirdImage from "@/shared/assets/images/categories/comedy/3.jpg";
import FourthImage from "@/shared/assets/images/categories/comedy/4.jpg";

import "./CategoryCard.scss";

interface CategoryCardProps {
  className?: string;

  title?: string;
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { className, title } = props;

  return (
    <InternalLink className={clx(className, "category-card")} to="/movies">
      <div className="category-card__images">
        <img className="category-card__image" src={FirstImage} alt="Hello" />
        <img className="category-card__image" src={FourthImage} alt="Hello" />
        <img className="category-card__image" src={SecondImage} alt="Hello" />
        <img className="category-card__image" src={TrirdImage} alt="Hello" />
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon className="category-card__icon" Svg={ArrowRightIcon} />
      </div>
    </InternalLink>
  );
};
