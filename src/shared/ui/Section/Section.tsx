import React from "react";
import clx from "classnames";
import "./Section.scss";

interface SectionProps {
  className?: string;

  children?: React.ReactNode;

  title: string;
  titleId: string;
  description?: string;
  actions?: React.ReactNode;
  isActionHiddenOnMobile?: boolean;
}

export const Section = (props: SectionProps) => {
  const { className, children, title, titleId, description, actions, isActionHiddenOnMobile = false } = props;

  return (
    <section className={clx(className, "section container")} aria-labelledby={titleId}>
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div
            className={clx("section__actions", {
              "hidden-tablet-down": isActionHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
};
