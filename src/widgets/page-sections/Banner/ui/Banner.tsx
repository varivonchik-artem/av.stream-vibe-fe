import { InternalLink } from "@/shared/ui/AppLink/InternalLink";
import { InternalLinkButtonMode } from "@/shared/ui/AppLink/InternalLink/InternalLink";
import "./Banner.scss";

export const Banner = () => {
  const titleId = "banner-title";

  return (
    <section className="banner container" aria-labelledby={titleId}>
      <div className="banner__inner">
        <div className="banner__body">
          <h2 className="banner__title" id={titleId}>
            Start your free trial today!
          </h2>
          <div className="banner__description">
            <p>
              This is a clear and concise call to action that encourages users to sign up for a free trial of
              StreamVibe.
            </p>
          </div>
        </div>

        <InternalLink
          className="banner__button"
          to="/subscriptions"
          linkText="Start a Free Trail"
          buttonMode={InternalLinkButtonMode.RED_45}
        />
      </div>
    </section>
  );
};
