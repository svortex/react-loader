import React from 'react'
import renderer from 'react-test-renderer'
import { Bar } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Bar />).toJSON()
  expect(tree).toMatchSnapshot()
})
