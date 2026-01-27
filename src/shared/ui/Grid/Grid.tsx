import React from "react";

import "./Grid.scss";
import classNames from "classnames";

interface GridProps {
  columns?: number;
  children: React.ReactNode;
}

export const Grid = ({ columns = 1, children }: GridProps) => (
  <ul
    className={classNames("grid", {
      [`grid_column-${columns}`]: columns > 1,
    })}
  >
    {React.Children.map(children, (child, index) => (
      <li className="grid__item" key={index}>
        {child}
      </li>
    ))}
  </ul>
);
