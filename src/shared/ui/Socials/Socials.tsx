import React from "react";

import "./Socials.scss";
import { ExternalLink } from "@shared/ui/AppLink/ExternalLink";
import { ExternalLinkButtonMode } from "@shared/ui/AppLink/ExternalLink/ExternalLink";

import clx from "classnames";

interface SocialLink {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

interface SocialsProps {
  className?: string;
  links: SocialLink[];
}

export const Socials: React.FC<SocialsProps> = ({ className, links }) => {
  return (
    <nav className={clx(className, "soc1als")} aria-label="Social links">
      <ul className="soc1als__list">
        {links.map(({ label, icon: Icon, href }) => (
          <li className="soc1als__item" key={href}>
            <ExternalLink
              className="soc1als__link"
              buttonMode={ExternalLinkButtonMode.BLACK_10}
              href={href}
              icon={Icon}
              aria-label={label}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
