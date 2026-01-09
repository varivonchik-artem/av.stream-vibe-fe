import { Categories } from "@widgets/page-sections/Categories";
import { Devices } from "@widgets/page-sections/Devices";
import { Hero } from "@widgets/page-sections/Hero";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Devices />
      <Categories />
      <Categories />
    </>
  );
};

export default MainPage;
