import "./Button.scss"
import clx from "classnames"
import { Icon } from "@/components/Icon/index.js"

export const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    mode = "",
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = "before",
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  const linkProps = { href, target }
  const buttonProps = { type }
  const componentProps = isLink ? linkProps : buttonProps

  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={clx(className, "button", { [`button_${mode}`]: mode })}
      aria-label={title}
      title={title}
      {...componentProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}
