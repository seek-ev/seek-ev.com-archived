import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Picture, Arrow } from './styles'

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
        <Wrapper>
            {pictures.length > 0 ?
                <Picture>
                    <Arrow left disabled={picture === 0} onClick={() => prevPic()}>
                        <MdKeyboardArrowLeft />
                    </Arrow>
                    <Arrow right disabled={(picture + 1) === pictures.length} onClick={() => nextPic()}>
                        <MdKeyboardArrowRight />
                    </Arrow>
                    <img src={pictures[picture] ? pictures[picture].url : '/se_dark.png'} alt={pictures[picture] ? pictures[picture].id : 'default_picture'} />
                </Picture> : <Picture default>
                    <img src='/se_dark.png' alt="default_picture" />
                </Picture>
            }
        </Wrapper>
    )
}

export { CarPictures }