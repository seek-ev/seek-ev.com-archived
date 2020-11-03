import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './car.sass'

const DetailsCar = (props) => {
    return (
        <Link to={`/${props.car.model}`} className="details-car-link">
            <div className="details-car">
                <div className="details-car-picture">
                    <img src={props.car.pictures.length > 0 ? props.car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${props.car.id}`} />
                </div>
                <div className="details-car-info">
                    <div className="details-car-info-left">
                        <div>
                            <div className="details-car-info-detail-model">
                                {props.car.model}
                            </div>
                            <div className="details-car-info-detail">
                                {props.car.productionYears}
                            </div>
                        </div>
                        <div className="details-car-info-detail">
                            {props.car.category ? props.car.category.name : ''}
                        </div>
                    </div>
                    <div className="details-car-info-detail">
                        {props.car.brand ? props.car.brand.shortName : ''}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { DetailsCar }