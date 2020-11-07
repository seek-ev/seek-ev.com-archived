import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

// Styles
import './car_card.sass'

const CarCard = (props) => {
    const [redirect, setRedirect] = useState(null)
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        if (props.car.pictures.length > 0) setPictures(props.car.pictures.reverse())
    }, [props])

    const redirectToCar = () => {
        setRedirect(`/${props.car.model}`)
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return (
        <div className="car-card" onClick={redirectToCar}>
            <div className="card-image">
                <img src={pictures.length > 0 ? pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={props.car.model} />
            </div>
            <div className="card-details">
                <div className="card-title">{props.car.model}</div>
                <div className="card-subtitle">{props.car.brand.shortName}</div>
            </div>
        </div>
    )
}

export { CarCard }