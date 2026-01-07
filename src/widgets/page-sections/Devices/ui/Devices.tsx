import { Grid } from "@shared/ui/Grid";
import { Section } from "@shared/ui/Section";
import { DeviceCard } from "../ui/components/DeviceCard/DeviceCard";

import PhoneIcon from "@/shared/assets/icons/devices/1.svg";
import TabletIcon from "@/shared/assets/icons/devices/2.svg";
import SmartTvIcon from "@/shared/assets/icons/devices/3.svg";
import LaptopIcon from "@/shared/assets/icons/devices/4.svg";
import GamingIcon from "@/shared/assets/icons/devices/5.svg";
import HeadsetIcon from "@/shared/assets/icons/devices/5.svg";

export const Devices = () => {
  const deviceItems = [
    {
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      Icon: PhoneIcon,
    },
    {
      title: "Tablet",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      Icon: TabletIcon,
    },
    {
      title: "Smart TV",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      Icon: SmartTvIcon,
    },
    {
      title: "Laptops",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      Icon: LaptopIcon,
    },
    {
      title: "Gaming Consoles",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      Icon: GamingIcon,
    },
    {
      title: "VR Headsets",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      Icon: HeadsetIcon,
    },
  ];

  return (
    <Section
      title="We Provide you streaming experience across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      actions={<div>Hello</div>}
    >
      <Grid columns={3}>
        {deviceItems.map((deviceItem, index) => (
          <DeviceCard
            title={deviceItem.title}
            description={deviceItem.description}
            icon={deviceItem.Icon}
            key={index}
          />
        ))}
      </Grid>
    </Section>
  );
};
