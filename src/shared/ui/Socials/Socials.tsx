import React from "react";
import { AppLink } from "@shared/ui/AppLink";


import clx from "classnames";
import "./Socials.scss";

interface SocialLink {
  label: string;
  iconName: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface SocialsProps {
  className?: string;

  links?: SocialLink[];
}

export const Socials = (props: SocialsProps) => {
  const { className, links } = props;

  return (
    <div className={clx(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <AppLink
              className="soc1als_link"
              mode="black-10"
              label={label}
              isLabelVisible={false}
              to="/"
              icon={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
