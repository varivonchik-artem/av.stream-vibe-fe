import "./Footer.scss";
import { InternalLink } from "@shared/ui/AppLink/InternalLink";
import { Socials } from "@shared/ui/Socials";
import { extraLinks, navitationFooterMenuItems } from "@widgets/Footer/items/navitationFooterMenuItems";

export const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <nav className="footer__menu">
        {navitationFooterMenuItems.map(({ title, links, socialLinks }, columnIndex) => (
          <div className="footer__menu-column" key={title ?? columnIndex}>
            <InternalLink className="footer__menu-title h6" to="/">
              {title}
            </InternalLink>

            {links && links.length > 0 && (
              <ul className="footer__menu-list">
                {links.map((link) => (
                  <li className="footer__menu-item" key={link}>
                    <InternalLink className="footer__menu-link" to="/">
                      {link}
                    </InternalLink>
                  </li>
                ))}
              </ul>
            )}
            {socialLinks?.length > 0 && <Socials className="footer__soc1als" links={socialLinks} />}
          </div>
        ))}
      </nav>

      <div className="footer__extra">
        <p className="footer__copyright">
          @<time dateTime="2023">2023</time> streamvibe, All Rights Reserved
        </p>
        <div className="footer__extra-links">
          {extraLinks.map((link, index) => (
            <InternalLink className="footer__extra-link" to="/" key={index}>
              {link}
            </InternalLink>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
