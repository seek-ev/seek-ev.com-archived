import React from 'react'

// Components
import { CarPictures } from 'components/car/car-pictures'
import { UserCarInfo } from './car-info'
import { CarVersions } from 'components/car/car-versions'
import { UserCarDetails } from 'components/cars/car/car-details'

const UserCarComponent = (props) => {
    const onDetailsProcessing = async (e) => {
        await props.onCarProcessing(e)
    }

    return (
        <div className="user-car-component">
            <div className="user-car-header">
                <div className="user-car-header-info">
                    <CarPictures pictures={props.car.pictures} />
                    <UserCarInfo brand={props.car.brand} productionYears={props.car.productionYears} category={props.car.category} concept={props.car.concept} />
                </div>
                <UserCarDetails verified={props.car.verified} onProcessing={onDetailsProcessing} />
            </div>
            <CarVersions versions={props.car.versions} />
        </div>
    )
}

export { UserCarComponent }