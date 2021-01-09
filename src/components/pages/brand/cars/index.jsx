import React from 'react'

// Styles
import { Wrapper, Title, List } from './styles'

// Components
import { BrandCar } from './car'

const BrandCars = ({ cars }) => {
    return (
        <Wrapper>
            <Title>Brand cars</Title>
            <List>
                {cars.map((c, i) => <BrandCar car={c} key={i} />)}
            </List>
        </Wrapper>
    )
}

export { BrandCars }