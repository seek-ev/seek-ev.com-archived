import React from 'react'

// Variables
import { Wrapper, Header, HeaderInfo } from './styles'

// Components
import { CarPictures } from 'components/pages/car/car-pictures'
import { UserCarInfo } from './car-info'
import { CarVersions } from 'components/pages/car/car-versions'
import { UserCarDetails } from 'components/pages/cars/car/car-details'

const UserCarComponent = ({ car, onCarProcessing }) => {
    const onDetailsProcessing = async (e) => {
        await onCarProcessing(e)
    }

    return (
        <Wrapper>
            <Header>
                <HeaderInfo>
                    <CarPictures pictures={car.pictures} />
                    <UserCarInfo brand={car.brand} productionYears={car.productionYears} category={car.category} concept={car.concept} />
                </HeaderInfo>
                <UserCarDetails verified={car.verified} onProcessing={onDetailsProcessing} />
            </Header>
            <CarVersions versions={car.versions} />
        </Wrapper>
    )
}

export { UserCarComponent }