import "./Categories.scss"
import { Section } from "@/components/Section/index.js"

export const Categories = () => {
  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={
        <div>
          <button type="button">back</button>
          <button type="button">next</button>
        </div>
      }
      isActionsHiddenOnMobile
    >
      Hello
    </Section>
  )
}
