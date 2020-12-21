import React from 'react'
import { shallow } from 'enzyme'

// Component
import { Button } from '../../../components/basic/button'

describe('Button Component', () => {
    it('Displays text correctly', () => {
        const button = shallow(<Button text="text" />)
        expect(button.text()).toEqual('text')
    })

    it('Click event', () => {
        const mockCallback = jest.fn()

        const button = shallow(<Button onClick={mockCallback} />)
        button.find('button').simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1)
    })

    it('Disabled Props', () => {
        const mockCallback = jest.fn()

        const button = shallow(<Button onClick={mockCallback} />)
        button.setProps({ disabled: true })
        expect(mockCallback.mock.calls.length).toEqual(0)
    })

    it('Primary props', () => {
        const button = shallow(<Button primary />)

        expect(button.find('.primary-button')).toHaveLength(1)
    })

    it('Error props', () => {
        const button = shallow(<Button error />)

        expect(button.find('.error-button')).toHaveLength(1)
    })

    it('Raise props', () => {
        const button = shallow(<Button raise />)

        expect(button.find('.raise-button')).toHaveLength(1)
    })

    it('Blue props', () => {
        const button = shallow(<Button blue />)

        expect(button.find('.blue-button')).toHaveLength(1)
    })

    it('Dark props', () => {
        const button = shallow(<Button dark />)

        expect(button.find('.dark-button')).toHaveLength(1)
    })

    it('Clean props', () => {
        const button = shallow(<Button clean />)

        expect(button.find('.clean-button')).toHaveLength(1)
    })

    it('Round props', () => {
        const button = shallow(<Button round />)

        expect(button.find('.round-button')).toHaveLength(1)
    })
})