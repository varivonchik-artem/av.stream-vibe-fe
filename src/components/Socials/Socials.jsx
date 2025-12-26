import "./Socials.scss"
import clx from "classnames"
import { Button } from "@/components/Button/index.js"

export const Socials = (props) => {
  const { className, links } = props

  return (
    <div className={clx(className, "soc1als")}>
      <ul className="socials__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als_link"
              mode="black-10"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
