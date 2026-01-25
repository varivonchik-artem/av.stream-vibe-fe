import FacebookIcon from "@/shared/assets/icons/facebook.svg";
import LinkedInIcon from "@/shared/assets/icons/linked-in.svg";
import TwitterIcon from "@/shared/assets/icons/twitter.svg";

export const navitationFooterMenuItems = [
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
        icon: FacebookIcon,
        href: "https://facebook.com",
      },
      {
        label: "Twitter",
        icon: TwitterIcon,
        href: "https://twitter.com",
      },
      {
        label: "LinkedIn",
        icon: LinkedInIcon,
        href: "https://linkedin.com",
      },
    ],
  },
];
export const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"];
