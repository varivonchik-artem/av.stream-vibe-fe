import { Hero } from "@widgets/page-sections/Hero";
import { Categories } from "@/widgets/page-sections/Categories";
import { Devices } from "@/widgets/page-sections/Devices";
import { Questions } from "@/widgets/page-sections/Questions";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
    </>
  );
};

export default MainPage;
