import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { Select } from 'components/basic/select'

const Header = ({ type, setType }) => {
    const changeType = (type) => {
        setType(type)
    }

    const types = ['bananaBox', 'weight', 'acceleration', 'noise', 'range']

    return (
        <Wrapper>
            <Select def={type} none options={types} onChange={changeType} />
        </Wrapper>
    )
}

export { Header }