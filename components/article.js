import PropTypes from 'prop-types'

const cx = {
  article: 'cf w-100 pv5',
  header: 'fn fl-ns w-50-ns pr4-ns',
  h2: 'mb3 mt0 lh-title fw5',
  span: 'f6 ttu tracked',
  content: 'fn fl-ns w-50-ns',
  p: 'lh-copy w-100 mt4 mt0-ns'
}

const Article = ({ title, details, url, children }) => (
  <article className={cx.article}>
    <header className={cx.header}>
      <h2 className={cx.h2}><a href={url}>{title}</a></h2>
      <span className={cx.span}>{details}</span>
    </header>
    <div className={cx.content}>
      {children}
    </div>
  </article>
)

Article.propTypes = {
  children: PropTypes.node,
  details: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Article
