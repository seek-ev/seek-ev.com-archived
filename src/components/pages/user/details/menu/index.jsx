import React from 'react'

// Styles
import { Wrapper, Item } from './styles'

const DetailsMenu = ({ item, setItem }) => {
    return (
        <Wrapper>
            <Item chosen={item === 'cars'} onClick={() => setItem('cars')}>Cars</Item>
            <Item chosen={item === 'tests'} onClick={() => setItem('tests')}>Tests</Item>
            <Item disabled>Reviews</Item>
        </Wrapper>
    )
}

export { DetailsMenu }