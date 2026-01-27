import { deviceItems } from "./deviceItems";
import { DeviceCard } from "@/shared/ui/DeviceCard";
import { Grid } from "@/shared/ui/Grid";
import { Section } from "@/shared/ui/Section";

export const Devices = () => {
  return (
    <Section
      title="We Provide you streaming experience across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
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
