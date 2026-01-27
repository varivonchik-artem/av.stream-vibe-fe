import clx from "classnames";
import { Icon } from "../Icon";
import "./DeviceCard.scss";

interface DeviceCardProps {
  className?: string;

  title: string;
  description: string;

  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const DeviceCard = (props: DeviceCardProps) => {
  const { className, title, description, icon } = props;

  return (
    <div className={clx(className, "device-card")}>
      <header className="device-card__header">
        <div className="device-card__icon-wrapper">
          <Icon className="device-card__icon" Svg={icon} hasFill />
        </div>
        <h3 className="device-card__title h4">{title}</h3>
      </header>
      <div className="device-card__description">
        <p>{description}</p>
      </div>
    </div>
  );
};
