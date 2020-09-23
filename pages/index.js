import Layout from '../components/layout'
import Article from '../components/article'

const cx = {
  main: '',
  p: 'lh-copy w-100 mt4 mt0-ns'
}

const Index = () => (
  <Layout className={cx.main}>
    <Article
      title='myhotpics'
      details='nextjs, react, gif, library, api'
      url='https://github.com/ZicklePop/myhotpics'
    >
      <p className={cx.p}>
        {'A gif library with an API and search. This connects to an Amazon S3 bucket so it automatically updates with the latest gifs. You can try it out at'} <a href='https://myhot.pics'>myhot.pics</a>
      </p>
    </Article>
    <Article
      title='melkat.link'
      details='nextjs, react, blog, bookmarks'
      url='https://github.com/ZicklePop/melkat-link'
    >
      <p className={cx.p}>
        {'A simple link blog powered by a Raindrop.io collection of links. This is what I use to power my website'} <a href='https://melkat.link'>melkat.link</a>
      </p>
    </Article>
    <Article
      title='Pitch'
      details='nextjs, react, web audio, lgbtqia+'
      url='https://github.com/ZicklePop/pitch'
    >
      <p className={cx.p}>
        {'This is an expiremental pitch tracker for people who want to feminize their voice. The goal behind this was to make something that would run in the most browsers, like Safari. You can try it out at'} <a href='https://pitch.melkat.dev'>pitch.melkat.dev</a>
      </p>
    </Article>
    <Article
      title='Dash Pi'
      details='raspberry pi, nextjs, react'
      url='https://github.com/ZicklePop/dash-pi'
    >
      <p className={cx.p}>
        {'A small gif clock with the weather, designed to fit on a 7 inch Raspberry Pi screen as a desk clock.'}
      </p>
    </Article>
    <Article
      title='Now Playing'
      details='shortcuts.app, apple music, html, js'
      url='https://routinehub.co/shortcut/2663'
    >
      <p className={cx.p}>
        {'Generates an image of the now playing song for sharing on Snapchat, Instagram, Facebook, or whatever’s Story feature.'}
      </p>
    </Article>
    <Article
      title='Pride Frames'
      details='shortcuts.app, html, js'
      url='https://routinehub.co/shortcut/2664'
    >
      <p className={cx.p}>
        {'Takes an image and a pride flag and makes a circular profile picture for you. Supporting the flags for: trans, LGBT (new with black and brown inclusion), lesbian (orange-ish less controversial version), bisexual, agender, aromantic, asexual, genderfluid, genderqueer, non-binary, and pansexual.'}
      </p>
    </Article>
    <Article
      title='Twitter Bulk Block'
      details='shortcuts.app, scriptable.app, js'
      url='https://routinehub.co/shortcut/4366'
    >
      <p className={cx.p}>
        <a href='https://github.com/williamsmj/twitterjam'>Inspired by TwitterJam.</a> {'Pass in a list of twitter handles to block. I would suggest'} <a href='https://twitter.com/settings/your_twitter_data/audiences'>the PDF of advertisers targeting your Twitter account</a>{', for example.'}
      </p>
    </Article>
    <Article
      title='unpkg.js'
      details='scriptable.app, js'
      url='https://gist.github.com/ZicklePop/603b19dd3b9e09f99030bc24e616ca6c'
    >
      <p className={cx.p}>
        {'Unpkg importer for'} <a href='https://scriptable.app'>scriptable.app</a>{', downloads modules to `iCloud Drive/Scriptable/modules`. Used like `const _ = await unpkg(\'lodash\')`'}
      </p>
    </Article>
    <Article
      title='Throw a Milkshake'
      details='browser extension, js'
      url='https://github.com/ZicklePop/throw-a-milkshake-for-twitter'
    >
      <p className={cx.p}>
        {'A keyboard command to easily report hate speech targeted towards individuals or a group of people on Twitter.'}
      </p>
    </Article>
  </Layout>
)

export default Index
