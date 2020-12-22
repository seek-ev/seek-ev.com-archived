import React from 'react'

// Styles
import './cars.sass'

// Components
import { BrandCar } from './car'

const BrandCars = ({ cars }) => {
    return (
        <div className="brand-cars">
            <div className="brand-cars-title">Brand cars</div>
            <div className="brand-cars-list">
                {cars.map((c, i) => <BrandCar car={c} key={i} />)}
            </div>
        </div>
    )
}

export { BrandCars }