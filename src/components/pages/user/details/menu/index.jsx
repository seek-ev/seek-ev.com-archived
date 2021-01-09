import React, { useState } from 'react'

// Styles
import { Wrapper, Item, ChosenItem, DisabledItem } from './styles'

const DetailsMenu = ({ baseItem, itemChange }) => {
    const [item, setItem] = useState(baseItem)

    const changeItem = (item) => {
        itemChange(item)
        setItem(item)
    }

    return (
        <Wrapper>
            {item === 'cars' ? <ChosenItem>Cars</ChosenItem> : <Item onClick={() => changeItem('cars')}>Cars</Item>}
            <DisabledItem>Tests</DisabledItem>
            <DisabledItem>Reviews</DisabledItem>
        </Wrapper>
    )
}

export { DetailsMenu }