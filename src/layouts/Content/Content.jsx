import "./Content.scss"

export const Content = (props) => {
  const { children } = props

  return <main className="content">{children}</main>
}
