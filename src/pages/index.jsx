import { Hero } from "@/sections/Hero/index.js"
import { Categories } from "@/sections/Categories/index.js"

export const metadata = {
  title: "Home",
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
