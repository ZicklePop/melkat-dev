import React from 'react'
import renderer from 'react-test-renderer'
import Article from '../components/article'

describe('component - article', () => {
  it('should render with props', () => {
    const component = renderer.create(
      <Article
        title='Now Playing'
        details='shortcuts.app, apple music, html, js'
        url='https://routinehub.co/shortcut/2663'
      >
        <p>
          {'Generates an image of the now playing song for sharing on Snapchat, Instagram, Facebook, or whatever’s Story feature.'}
        </p>
      </Article>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
