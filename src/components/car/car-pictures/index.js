import React, { useEffect, useState } from 'react'

// Styles
import './car_pictures.sass'

const CarPictures = (props) => {
    const [picture, setPicture] = useState(0)
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        if (props.pictures && props.pictures.length > 0) setPictures(props.pictures)
    }, [props.pictures])

    return (
        <div className="car-pictures">
            <div className={`${pictures.length > 0 ? 'car-picture' : 'car-pictures-hidden'}`}>
                <img src={pictures[picture] ? pictures[picture].url : '/se_dark.png'} alt={pictures[picture] ? pictures[picture].id : 'default_picture'} />
            </div>
            <div className={`${pictures.length === 0 ? 'car-picture' : 'car-pictures-hidden'} car-picture-default`}>
                <img src='/se_dark.png' alt="default_picture" />
            </div>
        </div>
    )
}

export { CarPictures }