import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './car.sass'

const DetailsCar = (props) => {
    return (
        <Link to={`/${props.car.model}`} className="details-car-link">
            <div className="details-car">
                <div className="details-car-picture">
                    <img src={props.car.pictures.length > 0 ? props.car.pictures[0].url : '/se_dark.png'} alt={`car-${props.car.id}`} />
                </div>
                <div className="details-car-info">
                    <div className="details-car-info-detail">
                        Model: <span class="car-bold">{props.car.model}</span>
                    </div>
                    <div className="details-car-info-detail">
                        Verified: <span className={`car-bold ${props.car.verified ? 'car-verified' : 'car-unverified'}`} >{props.car.verified ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="details-car-info-detail">
                        Added: <span className="car-bold">{new Date(props.car.createdAt).toLocaleDateString()}</span> </div>
                </div>
            </div>
        </Link>
    )
}

export { DetailsCar }