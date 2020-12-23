import React from 'react'

// Styles
import './car-info.sass'

const UserCarInfo = ({ brand, model, productionYears, category, concept }) => {
    return (
        <div className="user-car-info">
            <div className="user-car-model">
                {brand ? brand.shortName : ''} {model}
            </div>

            <div className="user-car-production-years">
                {productionYears}
            </div>

            <div className="user-car-production-years">
                {category ? category.name : ''}
            </div>

            <div className={`${concept ? 'user-car-concept' : 'user-car-hidden'}`}>
                {concept ? 'Concept car' : ''}
            </div>
        </div>
    )
}

export { UserCarInfo }