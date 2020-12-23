import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './car.sass'

const DetailsCar = ({ car }) => {
    return (
        <Link to={`/${car.model}`} className="details-car-link">
            <div className="details-car">
                <div className="details-car-picture">
                    <img src={car.pictures.length > 0 ? car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${car.id}`} />
                </div>
                <div className="details-car-info">
                    <div className="details-car-info-left">
                        <div>
                            <div className="details-car-info-detail-model">
                                {car.model}
                            </div>
                            <div className="details-car-info-detail">
                                {car.productionYears}
                            </div>
                        </div>
                        <div className="details-car-info-detail primary-color">
                            {car.category ? car.category.name : ''}
                        </div>
                    </div>
                    <div className="details-car-info-detail">
                        {car.brand ? car.brand.shortName : ''}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { DetailsCar }