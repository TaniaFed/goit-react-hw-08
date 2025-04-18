import css from './PageTitle.module.css'

const PageTitle = ({ children }) => {
  return <div className={css.title}>{children}</div>
}

export default PageTitle
