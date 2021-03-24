import React, { useState } from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { DetailsMenu } from 'components/pages/user/details/menu'

// Item components
import { Cars } from 'components/pages/user/details/items/cars'
import { Tests } from 'components/pages/user/details/items/tests'

const Details = ({ id }) => {
    const [item, setItem] = useState('cars')

    const changeItem = (item) => {
        setItem(item)
    }

    const ITEMS = {
        cars: <Cars id={id} />,
        tests: <Tests id={id} />
    }

    return (
        <Wrapper>
            <DetailsMenu item={item} setItem={changeItem} />

            {ITEMS[item]}
        </Wrapper>
    )
}

export { Details }