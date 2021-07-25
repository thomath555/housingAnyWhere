import React from 'react'
import renderer from 'react-test-renderer'

import Label from './index'

describe('Component: Label', () => {
  // Snapshot test
  it('should render', () => {
    const component = <Label label='component Label testing' />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})