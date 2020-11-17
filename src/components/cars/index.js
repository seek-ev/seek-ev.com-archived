import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './cars.sass'

const style = {
    width: '100%'
}

const Cars = (props) => {
    return (
        <div style={style}>
            <div className={`${props.cars.length > 0 ? 'cars-list' : 'cars-hidden'}`}>
                {props.cars.map((car) => {
                    return <Link to={`/cars/${car.id}`} className="user-car">
                        <div className="user-car-left">
                            <div className="user-car-number">{car.id}</div>
                            <div className="user-car-spacer">|</div>
                            <div className="user-car-model">
                                {car.model}
                                <div className={`user-car-verified ${car.verified ? 'verified' : 'unverified'}`}>{car.verified ? 'Verified' : 'Unverified'}</div></div>
                        </div>
                        <div>{new Date(car.createdAt).toLocaleDateString()}</div>
                    </Link>
                })}
            </div>
            <div className={`${props.cars.length > 0 ? 'cars-hidden' : ''}`}>
                You haven't added any cars yet
            </div>
        </div>
    )
}

export { Cars }