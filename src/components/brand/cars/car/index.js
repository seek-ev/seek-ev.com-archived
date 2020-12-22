import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './car.sass'

const BrandCar = ({ car }) => {
    return (
        <Link to={`/${car.model}`} className="brand-car-link">
            <div className="brand-car">
                <div className="brand-car-picture">
                    <img src={car.pictures.length > 0 ? car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${car.id}`} />
                </div>
                <div className="brand-car-info">
                    <div className="brand-car-info-left">
                        <div>
                            <div className="brand-car-info-detail-model">
                                {car.model}
                            </div>
                            <div className="brand-car-info-detail">
                                {car.productionYears}
                            </div>
                        </div>
                        <div className="brand-car-info-detail primary-color">
                            {car.category ? car.category.name : ''}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { BrandCar }