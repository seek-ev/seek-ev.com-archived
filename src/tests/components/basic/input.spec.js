import React from 'react'
import { shallow } from 'enzyme'

// Component
import { Input } from 'components/basic/input'

describe('Input Component', () => {
    it('Render input with proper class', () => {
        const input = shallow(<Input />)
        expect(input.find('.seek-input')).toHaveLength(1)
    })

    it('Display placeholder', () => {
        const input = shallow(<Input placeholder="test" />)
        expect(input.find('input').html()).toMatch('placeholder="test"')
    })

    it('onChange event', () => {
        const mockCallback = jest.fn()
        const input = shallow(<Input onChange={mockCallback} />)
        input.find('input').simulate('change', { target: 'value' })
        expect(mockCallback).toBeCalledWith('value')
    })

    it('Set name', () => {
        const input = shallow(<Input name="test" />)
        expect(input.find({ name: 'test' })).toHaveLength(1)
    })

    it('Set type', () => {
        const input = shallow(<Input type="checkbox" />)
        expect(input.find('input').html()).toMatch('type="checkbox"')
    })

    it('Set autocomplete', () => {
        const input = shallow(<Input autoComplete="email" />)
        expect(input.find('input').html()).toMatch('autoComplete="email"')
    })

    it('Value props', () => {
        const input = shallow(<Input value="test" />)
        expect(input.find('input').html()).toMatch('value="test"')
    })

    it('Disabled props', () => {
        const input = shallow(<Input disabled />)
        expect(input.find('input').is('[disabled]')).toBeTruthy()
    })

    it('Raise props', () => {
        const input = shallow(<Input raise />)
        expect(input.find('.raise-input')).toHaveLength(1)
    })

    it('Border props', () => {
        const input = shallow(<Input border />)
        expect(input.find('.border-input')).toHaveLength(1)
    })

    it('Error props', () => {
        const input = shallow(<Input error="Error test" />)
        expect(input.find('.error-input')).toHaveLength(1)
        expect(input.find('.error-message').text()).toEqual('Error test')
    })

    it('Valid props', () => {
        const input = shallow(<Input valid />)
        expect(input.find('.valid-input')).toHaveLength(1)
    })

    it('Round props', () => {
        const input = shallow(<Input round />)
        expect(input.find('.round-input')).toHaveLength(1)
    })

    it('Required props', () => {
        const input = shallow(<Input required />)
        expect(input.find('input').html()).toMatch('required')
    })
})