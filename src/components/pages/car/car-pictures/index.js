import React, { useEffect, useState } from 'react'

// Styles
import './car_pictures.sass'

// Icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const CarPictures = (props) => {
    const [picture, setPicture] = useState(0)
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        if (props.pictures && props.pictures.length > 0) setPictures(props.pictures)
    }, [props.pictures])

    const prevPic = () => {
        if (picture !== 0) {
            setPicture(picture - 1)
        }
    }

    const nextPic = () => {
        if (pictures.length > picture + 1) {
            setPicture(picture + 1)
        }
    }

    return (
        <div className="car-pictures">
            <div className={`${pictures.length > 0 ? 'car-picture' : 'car-pictures-hidden'}`}>
                <div className={`car-pic-arrow arrow-left  ${picture === 0 ? 'car-pic-arrow-disabled' : ''}`} onClick={() => prevPic()}>
                    <MdKeyboardArrowLeft />
                </div>
                <div className={`car-pic-arrow arrow-right ${(picture + 1) === pictures.length ? 'car-pic-arrow-disabled' : ''}`} onClick={() => nextPic()}>
                    <MdKeyboardArrowRight />
                </div>
                <img src={pictures[picture] ? pictures[picture].url : '/se_dark.png'} alt={pictures[picture] ? pictures[picture].id : 'default_picture'} />
            </div>
            <div className={`${pictures.length === 0 ? 'car-picture' : 'car-pictures-hidden'} car-picture-default`}>
                <img src='/se_dark.png' alt="default_picture" />
            </div>
        </div>
    )
}

export { CarPictures }