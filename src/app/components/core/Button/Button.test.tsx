import React from 'react'
import { shallow } from 'enzyme'

import Button from './index'

describe('Button', () => {
  it('should render a button', () => {
    const wrapper = shallow(<Button>Test</Button>)

    expect(wrapper.contains('Test')).toBeTruthy()
  })
})
