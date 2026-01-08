import { Slider } from "@shared/ui/Slider";
import { Devices } from "@widgets/page-sections/Devices";
import { Hero } from "@widgets/page-sections/Hero";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Devices />
      <Slider>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </Slider>
    </>
  );
};

export default MainPage;
