import React, { useEffect, useState } from 'react'

// Styles
import './cars.sass'

// Components
import { DetailsCar } from './car'

const DetailsCars = (props) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        if (props.cars) {
            setCars(props.cars)
        }
    }, [props.cars])

    return (
        <div className="details-cars">
            <div className={cars.length > 0 ? '' : 'details-cars-hidden'}>
                {cars.map((c) => {
                    return <DetailsCar car={c} key={c.id} />
                })}
            </div>
            <div className={cars.length <= 0 ? 'details-cars-not-found' : 'details-cars-hidden'}>
                User haven't added any cars yet
            </div>
        </div>
    )
}

export { DetailsCars }