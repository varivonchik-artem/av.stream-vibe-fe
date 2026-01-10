import React from "react";
import clx from "classnames";
import "./AccordionGroup.scss";

interface AccordionGroupProps {
  className?: string;

  children?: React.ReactNode[];
  columns?: number;
  isOrderedList?: boolean;
}

export const AccordionGroup = (props: AccordionGroupProps) => {
  const { className, children, columns, isOrderedList = true } = props;

  const itemsPerColumn = Math.ceil(children.length / columns);

  const ListTag = isOrderedList ? "ol" : "ul";

  return (
    <ListTag
      className={clx(className, "accordion-group", {
        [`accordion-group_${columns}-columns`]: columns > 1,
        "accordion-group_has-counter": isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li
          className={clx("accordion-group__item", {
            "accordion-group__item_last-column-item":
              columns > 1 && itemsPerColumn / (index + 1) === 1,
          })}
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  );
};
