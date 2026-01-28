import React from "react";
import clx from "classnames";
import "./Accordion.scss";

interface AccordionProps {
  className?: string;

  children?: React.ReactNode;

  title?: string;
  titleId?: string;

  name?: string;

  isOpen?: boolean;
}

export const Accordion = (props: AccordionProps) => {
  const { className, children, title, titleId, name, isOpen } = props;

  return (
    <div className={clx(className, "accordion")}>
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary">
          <h3 className="accordion__title h5">
            <span role="term" aria-details={titleId}>
              {title}
            </span>
          </h3>
        </summary>
      </details>
      <div className="accordion__content" id={titleId} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
