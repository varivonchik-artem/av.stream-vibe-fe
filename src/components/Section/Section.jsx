import "./Section.scss"
import clx from "classnames"

export const Section = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions,
    isActionsHiddenOnMobile = false,
    children,
  } = props

  return (
    <section
      className={clx(className, "section container")}
      aria-label={titleId}
    >
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
              section__actions_hidden: isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
