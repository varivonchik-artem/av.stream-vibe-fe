import "./Icon.scss"
import clx from "classnames"
import { Icon as MinistaIcon } from "minista"

export const Icon = (props) => {
  const { className, name, hasFill = false } = props

  return (
    <span className={clx(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}
