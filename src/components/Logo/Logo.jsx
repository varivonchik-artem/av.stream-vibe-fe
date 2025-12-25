import "./Logo.scss"
import clx from "classnames"

export const Logo = (props) => {
  const { className, loading = "lazy" } = props
  return (
    <a
      className={clx(className, "logo")}
      href="/"
      title="Home"
      aria-label="Home"
    >
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        height={60}
        width={199}
        loading={loading}
      />
    </a>
  )
}
