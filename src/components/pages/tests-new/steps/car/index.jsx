import React from 'react'

// Styles
import {
    Wrapper
} from './styles'

// Components
import { Results } from './results'
import { Owned } from './owned'

const CarStep = ({ nextOwned, nextCar }) => {

    const owned = (car) => {
        nextOwned(car)
    }

    const car = (car) => {
        nextCar(car)
    }

    return (
        <Wrapper>
            <Owned next={owned} />
            <Results next={car} />
        </Wrapper>
    )
}

export { CarStep }