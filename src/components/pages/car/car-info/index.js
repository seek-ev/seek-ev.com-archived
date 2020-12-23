import React from 'react'

// Styles
import './car_info.sass'

const CarInfo = ({ brand, model, productionYears, category, concept }) => {
    return (
        <div className="car-info">
            <div className="car-model">
                {brand ? brand.shortName : ''} {model}
            </div>

            <div className="car-production-years">
                {productionYears}
            </div>

            <div className="car-production-years">
                {category ? category.name : ''}
            </div>

            <div className={`${concept ? 'car-concept' : 'car-hidden'}`}>
                {concept ? 'Concept car' : ''}
            </div>
        </div>
    )
}

export { CarInfo }
