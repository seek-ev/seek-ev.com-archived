import React from 'react'
import { shallow } from 'enzyme'

// Component
import { Select } from 'components/basic/select'

describe('Select component', () => {
    it('onChange event', () => {
        const mockCallback = jest.fn()
        const select = shallow(<Select onChange={mockCallback} />)
        select.find('select').simulate('change', { target: 'value' })
        expect(mockCallback).toBeCalledWith('value')
    })

    it('Set name', () => {
        const select = shallow(<Select name="test" />)
        expect(select.find({ name: 'test' })).toHaveLength(1)
    })

    it('Raise props', () => {
        const select = shallow(<Select raise />)
        expect(select.find('.raise-select')).toHaveLength(1)
    })

    it('Disabled props', () => {
        const select = shallow(<Select disabled />)
        expect(select.find('select').is('[disabled]')).toBeTruthy()
    })

    it('Render simple options', () => {
        const options = ['test', 'test v1', 'test v2']
        const select = shallow(<Select options={options} />)
        expect(select.find('select').childAt(0).type()).toBe('option')
        expect(select.find('select').children()).toHaveLength(3)
    })

    it('Option value and key', () => {
        const options = ['test']
        const select = shallow(<Select options={options} />)
        expect(select.find('select').children().first().html()).toMatch('value="test"')
        expect(select.find('select').children().first().key()).toEqual("0")
    })

    it('Option with custom value', () => {
        const options = [{ test: '123' }]
        const select = shallow(<Select options={options} value="test" />)
        expect(select.find('select').childAt(0).props().value).toEqual('123')
    })

    it('Option with custom display prop', () => {
        const options = [{ test: '123' }]
        const select = shallow(<Select options={options} display="test" />)
        expect(select.find('select').childAt(0).first().text()).toEqual('123')
    })

    it('Option with id as key', () => {
        const options = [{ id: 1, test: '123' }]
        const select = shallow(<Select options={options} display="test" />)
        expect(select.find('select').children().first().key()).toEqual("1")
    })

    it('Hidden option', () => {
        const options = [{ test: '123', hidden: true }]
        const select = shallow(<Select options={options} display="test" />)
        expect(select.find('select').childAt(0).first().html()).toMatch('hidden')
    })
})