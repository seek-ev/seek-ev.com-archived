import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './cars.sass'

const style = {
    width: '100%'
}

const Cars = ({ cars }) => {
    return (
        <div style={style}>
            <div className={`${cars.length > 0 ? 'cars-list' : 'cars-hidden'}`}>
                {cars.map((car) => {
                    return <Link to={`/cars/${car.id}`} className="user-car" key={car.id}>
                        <div className="user-cars-left">
                            <div className="user-cars-number">{car.id}</div>
                            <div className="user-cars-spacer">|</div>
                            <div className="user-cars-model">
                                {car.model}
                                <div className={`user-cars-verified ${car.verified ? 'verified' : 'unverified'}`}>{car.verified ? 'Verified' : 'Unverified'}</div></div>
                        </div>
                        <div>{new Date(car.createdAt).toLocaleDateString()}</div>
                    </Link>
                })}
            </div>
            <div className={`${cars.length > 0 ? 'cars-hidden' : ''}`}>
                You haven't added any cars yet
            </div>
        </div>
    )
}

export { Cars }