import "./Footer.scss";
import { AppLink } from "@shared/ui/AppLink";
import { Socials } from "@shared/ui/Socials";

import FacebookIcon from "@/shared/assets/icons/facebook.svg";
import LinkedInIcon from "@/shared/assets/icons/linked-in.svg";
import TwitterIcon from "@/shared/assets/icons/twitter.svg";

export const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Popular",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: FacebookIcon,
        },
        {
          label: "Twitter",
          iconName: TwitterIcon,
        },
        {
          label: "LinkedIn",
          iconName: LinkedInIcon,
        },
      ],
    },
  ];

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <AppLink className="footer__menu-title h6" to="/" label={title} />
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link) => (
                    <li className="footer__menu-item" key={index}>
                      <AppLink className="footer__menu-link" to="/" label={link} />
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvibe, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((link, index) => (
              <AppLink className="footer__extra-link" to="/" label={link} key={index} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
