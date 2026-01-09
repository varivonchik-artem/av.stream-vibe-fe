import "./CategoryCard.scss";

import { AppLink } from "@shared/ui/AppLink";

import { Icon } from "@shared/ui/Icon";
import clx from "classnames";
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg";
import ImageText from "@/shared/assets/images/categories/comedy/3.jpg";


interface CategoryCardProps {
  className?: string;

  title?: string;
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { className, title } = props;

  return (
    <AppLink className={clx(className, "category-card")} to="/">
      <div className="category-card__images">
        <img className="category-card__image" src={ImageText} alt="Hello" />
        <img className="category-card__image" src={ImageText} alt="Hello" />
        <img className="category-card__image" src={ImageText} alt="Hello" />
        <img className="category-card__image" src={ImageText} alt="Hello" />
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon className="category-card__icon" Svg={ArrowRightIcon} />
      </div>
    </AppLink>
  );
};
