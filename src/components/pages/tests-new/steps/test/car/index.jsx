import React from 'react'

// Styles
import { Wrapper, Title, Card, Background, CarTitle } from './styles'

const TestCar = ({ car }) => {
    return (
        <Wrapper>
            <Title>Test performed in:</Title>
            {car.version ? <Card>
                <Background src={car.version.timeline.car.pictures.length > 0 ? car.version.timeline.car.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={car.id} />
                <CarTitle>{car.version.timeline.car.brand.shortName} {car.version.timeline.car.model} - {car.version.timeline.year} {car.version.name}</CarTitle>
            </Card> : <Card>
                    <Background src={car.pictures.length > 0 ? car.timeline.car.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={car.id} />
                    <CarTitle>{car.brand.shortName} {car.model} - {car.timeline.year} {car.timeline.version.name}</CarTitle>
                </Card>}
        </Wrapper>
    )
}

export { TestCar }