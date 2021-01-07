import React from 'react'

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
        <div className="user-car-component">
            <div className="user-car-header">
                <div className="user-car-header-info">
                    <CarPictures pictures={car.pictures} />
                    <UserCarInfo brand={car.brand} productionYears={car.productionYears} category={car.category} concept={car.concept} />
                </div>
                <UserCarDetails verified={car.verified} onProcessing={onDetailsProcessing} />
            </div>
            <CarVersions versions={car.versions} />
        </div>
    )
}

export { UserCarComponent }