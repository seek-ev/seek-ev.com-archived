import React from 'react'
import { shallow, mount, render } from 'enzyme'

// Component
import { Input } from 'components/basic/input'

describe('Input Component', () => {
    it('Render input correctly', () => {
        const input = shallow(<Input />)
        expect(input).toMatchSnapshot()
    })

    it('Display placeholder', () => {
        const input = shallow(<Input placeholder="test" />)
        expect(input.get(0).props.children[0].props.placeholder).toEqual('test')
    })

    it('onChange event', () => {
        const mockCallback = jest.fn()
        const input = mount(<Input onChange={mockCallback} />)
        input.find('input').simulate('change', { target: 'value' })
        expect(mockCallback).toBeCalledWith('value')
    })

    it('Set name', () => {
        const input = shallow(<Input name="test" />)
        expect(input.find({ name: 'test' })).toHaveLength(1)
    })

    it('Set type', () => {
        const input = shallow(<Input type="checkbox" />)
        expect(input.get(0).props.children[0].props.type).toEqual('checkbox')
    })

    it('Set autocomplete', () => {
        const input = shallow(<Input autoComplete="email" />)
        expect(input.get(0).props.children[0].props.autoComplete).toEqual('email')
    })

    it('Value props', () => {
        const input = shallow(<Input value="test" />)
        expect(input.get(0).props.children[0].props.value).toEqual('test')
    })

    it('Disabled props', () => {
        const input = shallow(<Input disabled />)
        expect(input.get(0).props.children[0].props.disabled).toBe(true)
    })

    it('Raise props', () => {
        const input = shallow(<Input raise />)
        expect(input.get(0).props.children[0].props.raise).toBe(true)
    })

    it('Border props', () => {
        const input = shallow(<Input border />)
        expect(input.get(0).props.children[0].props.border).toBe(true)
    })

    it('Error props', () => {
        const input = render(<Input error="Error test" />)
        expect(input.children()[1].children[0].data).toEqual('Error test')
    })

    it('Valid props', () => {
        const input = shallow(<Input valid />)
        expect(input.get(0).props.children[0].props.valid).toBe(true)
    })

    it('Round props', () => {
        const input = shallow(<Input round />)
        expect(input.get(0).props.children[0].props.round).toBe(true)
    })

    it('Required props', () => {
        const input = shallow(<Input required />)
        expect(input.get(0).props.children[0].props.required).toBe(true)
    })
})