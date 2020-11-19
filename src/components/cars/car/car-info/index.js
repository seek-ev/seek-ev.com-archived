import React from 'react'

// Styles
import './car-info.sass'

const UserCarInfo = (props) => {
    return (
        <div className="user-car-info">
            <div className="user-car-model">
                {props.brand ? props.brand.shortName : ''} {props.model}
            </div>

            <div className="user-car-production-years">
                {props.productionYears}
            </div>

            <div className="user-car-production-years">
                {props.category ? props.category.name : ''}
            </div>

            <div className={`${props.concept ? 'user-car-concept' : 'user-car-hidden'}`}>
                {props.concept ? 'Concept car' : ''}
            </div>
        </div>
    )
}

export { UserCarInfo }