import React from 'react'
import { shallow } from 'enzyme'

// Component
import { Select } from 'components/basic/select'

describe('Select component', () => {
    it('Raise props', () => {
        const select = shallow(<Select raise />)
        expect(select.props().raise).toBe(true)
    })
})