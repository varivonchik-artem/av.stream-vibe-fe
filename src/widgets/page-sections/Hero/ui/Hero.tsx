import { ExternalLink } from "@shared/ui/AppLink/ExternalLink";
import { ExternalLinkButtonMode } from "@shared/ui/AppLink/ExternalLink/ExternalLink";
import "./Hero.scss";
import PlayIcon from "@/shared/assets/icons/play.svg";
import PlayButtonImage from "@/shared/assets/icons/play_button.svg?url";
export const Hero = () => {
  const titleId = "hero-title";

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button className="hero__play-button" type="button" aria-label="Play Video" title="Play Video">
            <img className="hero__play-image" src={PlayButtonImage} alt="" height={470} width={470} />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id={titleId}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime,
            anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters,
            classic movies, popular TV shows, and more. You can also create your own watchlist, so you can easily find
            the content you want to watch.
          </div>
          <ExternalLink
            className="hero__link"
            href="/"
            icon={PlayIcon}
            buttonMode={ExternalLinkButtonMode.RED_45}
            linkText="Start Watching Now"
          />
        </div>
      </div>
    </section>
  );
};
