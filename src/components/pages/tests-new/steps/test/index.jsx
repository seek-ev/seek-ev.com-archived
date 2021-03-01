import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { TestCar } from './car'
import { TestForm } from './form'

const TestStep = ({ car, previousStep }) => {
    return (
        <Wrapper>
            <TestCar car={car} />
            <TestForm previousStep={previousStep} car={car} />
        </Wrapper>
    )
}

export { TestStep }