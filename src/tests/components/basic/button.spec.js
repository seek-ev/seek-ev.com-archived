import React from 'react'
import { shallow } from 'enzyme'

// Component
import { Button } from '../../../components/basic/button'

describe('Button Component', () => {
    it('Display text correctly', () => {
        const button = shallow(<Button text="text" />)
        expect(button.text()).toEqual('text')
    })

    it('Click event', () => {
        const mockCallback = jest.fn()

        const button = shallow((<Button onClick={mockCallback} />))
        button.find('button').simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1)
    })

    it('Disabled Props', async () => {
        const mockCallback = jest.fn()

        const button = shallow((<Button onClick={mockCallback} />))
        button.setProps({ disabled: true })
        expect(mockCallback.mock.calls.length).toEqual(0)
    })
})