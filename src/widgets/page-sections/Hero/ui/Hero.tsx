import React from "react";
import "./Hero.scss";

import { Button } from "@shared/ui/Button";
import { Icon } from "@shared/ui/Icon";
import PlayButtonIcon from "@/shared/assets/icons/play.svg";

import PlayIcon from "@/shared/assets/icons/play_button.svg";

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            title="Play Video"
            aria-label="Play Video"
          >
            <Icon className="hero__play-icon" height={470} width={470} Svg={PlayIcon} />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id="hero-title">
            The best Streaming Experience
          </h1>
          <div className="hero__description">
            StreamVibe is the best streaming experience for watching your favorite movies and shows
            on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content,
            including the latest blockbusters, classic movies, popular TV shows, and more. You can
            also create your own watchlist, so you can easily find the content you want to watch.
          </div>
          <Button className="hero__button" label="Start Watching Now" icon={PlayButtonIcon} />
        </div>
      </div>
    </section>
  );
};
