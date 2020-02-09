import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'measure-wide center sans-serif f3 fw2',
  h1: 'lh-title fw2 f2 pv3',
  h1a: 'no-underline'
}

const Layout = ({ title, description, children, className }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
      </Head>
      <style global jsx>
        {`
          body {
            color: #fff;
            background: #000;
          }
          a {
            color: #fff;
          }
          h1 a::after {
            content: '.dev';
            color: #949494;
          }
          @media (prefers-color-scheme: light) {
           body {
             color: #111;
             background: #fff;
           }
           a {
             color: #111;
           }
          }
        `}
      </style>
      <h1 className={cx.h1}>
        <a
          className={cx.h1a}
          href='/'
        >
          {'melkat'}
        </a>
      </h1>
      {children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Layout.defaultProps = {
  title: 'melkat.dev',
  description: 'melkat codes',
  className: ''
}

export default Layout
