import { menuItems } from "@widgets/Header/ui/Header";
import clx from "classnames";
import "./HeaderForm.scss";
import { NavLink } from "react-router-dom";

export const HeaderForm = () => {
  return (
    <ul className="header-form-list">
      {menuItems.map(({ label, href }, index) => (
        <li className="header-form-list__item" key={index}>
          <NavLink
            className={({ isActive }) =>
              clx("header-form-list__link", { "header-form-list__link_active": isActive })
            }
            to={href}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
