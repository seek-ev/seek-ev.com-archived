import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

// Styles
import './car_card.sass'

const CarCard = ({ car }) => {
    const [redirect, setRedirect] = useState(null)

    const redirectToCar = () => {
        setRedirect(`/${car.model}`)
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return (
        <div className="car-card" onClick={redirectToCar}>
            <div className="card-image">
                <img src={car.pictures.length > 0 ? car.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={car.model} />
            </div>
            <div className="card-details">
                <div className="card-title">{car.model}</div>
                <div className="card-subtitle">{car.brand.shortName}</div>
            </div>
        </div>
    )
}

export { CarCard }