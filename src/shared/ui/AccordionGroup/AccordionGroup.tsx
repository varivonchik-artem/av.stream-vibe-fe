import React from "react";
import clx from "classnames";
import "./AccordionGroup.scss";

interface AccordionGroupProps {
  className?: string;
  children?: React.ReactNode;

  columns?: number;
  isOrderedList?: boolean;
}

export const AccordionGroup: React.FC<AccordionGroupProps> = React.memo((props: AccordionGroupProps) => {
  const { className, children, columns = 1, isOrderedList = true } = props;

  const items = React.Children.toArray(children);

  if (items.length === 0) {
    return null;
  }

  const safeColumns = Math.max(1, columns);
  const itemsPerColumn = Math.ceil(items.length / safeColumns);

  const ListTag: "ol" | "ul" = isOrderedList ? "ol" : "ul";

  return (
    <ListTag
      className={clx(className, "accordion-group", {
        [`accordion-group_${safeColumns}-columns`]: safeColumns > 1,
        "accordion-group_has-counter": isOrderedList,
      })}
    >
      {items.map((child, index) => {
        const isLastColumnItem = safeColumns > 1 && (index + 1) % itemsPerColumn === 0;

        return (
          <li
            key={(child as React.ReactElement)?.key ?? index}
            className={clx("accordion-group__item", {
              "accordion-group__item_last-column-item": isLastColumnItem,
            })}
          >
            {child}
          </li>
        );
      })}
    </ListTag>
  );
});
