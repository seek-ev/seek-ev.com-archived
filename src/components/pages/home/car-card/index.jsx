import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

// Styles
import { Wrapper, Image, Details, Title, Subtitle } from './styles'

const CarCard = ({ car }) => {
    const [redirect, setRedirect] = useState(null)

    const redirectToCar = () => {
        setRedirect(`/${car.model}`)
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return (
        <Wrapper onClick={redirectToCar}>
            <Image>
                <img src={car.pictures.length > 0 ? car.pictures[0].url : ''} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={car.model} />
            </Image>
            <Details>
                <Title>{car.model}</Title>
                <Subtitle>{car.brand.shortName}</Subtitle>
            </Details>
        </Wrapper>
    )
}

export { CarCard }