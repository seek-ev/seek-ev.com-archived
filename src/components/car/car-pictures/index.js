import React from 'react'

// Styles
import './car_pictures.sass'

const CarPictures = (props) => {
    return (
        <div className="car-pictures">
            {props.pictures ? props.pictures.map((p) => {
                return <img src={p.url} key={p.id} alt={p.id} />
            }) : ''}
            {JSON.stringify(props)}
        </div>
    )
}

export { CarPictures }