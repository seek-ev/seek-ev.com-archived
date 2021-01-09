import React from 'react'
import { shallow } from 'enzyme'

// Component
import { Button } from 'components/basic/button'

describe('Button Component', () => {
    it('Render button correctly', () => {
        const button = shallow(<Button />)
        expect(button).toMatchSnapshot()
    })

    it('Displays text', () => {
        const button = shallow(<Button text="text" />)
        expect(button.text()).toEqual('text')
    })

    it('Click event', () => {
        const mockCallback = jest.fn()
        const button = shallow(<Button onClick={mockCallback} />)
        button.simulate('click')
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
        expect(button).toHaveStyleRule('background-color', '#1DB954')
    })

    it('Error props', () => {
        const button = shallow(<Button error />)
        expect(button).toHaveStyleRule('background-color', '#ed1c46')
    })

    it('Raise props', () => {
        const button = shallow(<Button raise />)
        expect(button).toMatchSnapshot()
    })

    it('Blue props', () => {
        const button = shallow(<Button blue />)
        expect(button).toHaveStyleRule('background-color', '#0070f3')
    })

    it('Dark props', () => {
        const button = shallow(<Button dark />)
        expect(button).toHaveStyleRule('background-color', '#080808')
    })

    it('Clean props', () => {
        const button = shallow(<Button clean />)
        expect(button).toMatchSnapshot()
    })

    it('Round props', () => {
        const button = shallow(<Button round />)
        expect(button).toHaveStyleRule('border-radius', '16px')
    })
})