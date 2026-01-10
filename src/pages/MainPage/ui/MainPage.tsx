import { Categories } from "@widgets/page-sections/Categories";
import { Devices } from "@widgets/page-sections/Devices";
import { Hero } from "@widgets/page-sections/Hero";
import { Questions } from "@widgets/page-sections/Questions";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Devices />
      <Categories />
      <Questions />
    </>
  );
};

export default MainPage;
