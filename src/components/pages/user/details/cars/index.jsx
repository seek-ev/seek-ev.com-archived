import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Cars, NotFound } from './styles'

// Components
import { DetailsCar } from './car'

const DetailsCars = (props) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        if (props.cars) setCars(props.cars)
    }, [props.cars])

    return (
        <Wrapper>
            {cars.length > 0 ? <Cars>{cars.map((c) => <DetailsCar car={c} key={c.id} />)}</Cars>
                : <NotFound>User doesn't own any cars</NotFound>}
        </Wrapper>
    )
}

export { DetailsCars }