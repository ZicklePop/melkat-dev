import React from 'react'
import Head from 'next/head'
import { insertRule, css, style, rehydrate } from 'glamor'
import { tachyons, reset, wrap } from 'glamor-tachyons'

let darkModeEnabled = true
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
  darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches
}
reset({ insertRule })
const t = (classNames) => css(tachyons(classNames))
const white = '#fff'
const black = '#000'
const nearBlack = '#111'
css.global('body, a', {
  color: darkModeEnabled ? white : nearBlack,
  backgroundColor: darkModeEnabled ? black : white
})

const styles = {
  dotDev: style({
    '&::after': {
      content: '.dev',
      color: '#949494'
    }
  }),
  gween: style({ color: '#65A300' }),
  woyal: style({ color: '#005C9E' }),
  mel: style({ color: '#0096DB' }),
  pwink: style({ color: '#FF52A3' }),
  pweach: style({ color: '#FF5757' }),
  purp: style({ color: '#B24DFF' }),
  weal: style({ color: '#29A0A8' }),
  wed: style({ color: '#FF2929' }),
  flexGrow: style({ webkitBoxFlex: 1, msFlexPositive: 1, flexGrow: 1 })
}

const classNames = wrap({
  main: 'mw8 center sans-serif near-black f3 fw2',
  h1: 'lh-title fw2 f2 pa3',
  a: 'link',
  articleList: 'flex-ns flex-wrap-ns',
  firstArticleContainer: 'w-100 dib flex-ns ph3 pv2',
  articleContainer: 'w-100 w-50-ns dib flex-ns ph3 pv2',
  article: 'w-100 db ba br2 b--black-10 mb3 overflow-hidden no-underline',
  articleImageDiv: 'w-100 aspect-ratio aspect-ratio--16x9',
  articleImage: 'aspect-ratio--object cover bg-center',
  articleDetailsDiv: 'pa3',
  articleTitle: 'link lh-title f4 fw3 mv0',
  articleDate: 'gray db pv2 f6'
}, css)

export default () => (
  <main className={classNames.main}>
    <Head>
      <title>melkat.dev</title>
      <meta name='twitter:title' content='melkat.dev' />
      <meta name='twitter:description' content='melkat codes' />
      <meta name='twitter:image' content='https://melkat.dev/static/facebook-open-graph.png' />
      <meta name='twitter:image:alt' content='logo for melkat.dev' />
      <meta property='og:description' content='melkat.dev' />
      <meta property='og:image' content='https://melkat.dev/static/facebook-open-graph.png' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:title' content='melkat.dev' />
    </Head>
    <h1 className={classNames.h1}>
      <a
        {...styles.dotDev}
        className={t('no-underline')}
        href='/'
      >
        {'melkat'}
      </a>
    </h1>
    <div className={classNames.articleList} />
  </main>
)
