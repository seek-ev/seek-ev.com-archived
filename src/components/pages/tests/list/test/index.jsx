import React from 'react'

// Styles
import { Wrapper, Car, Text, Type, Date } from './styles'

const Test = ({ test }) => {
    return (
        <Wrapper>
            <Car>Car: <Text>{test.version.timeline.car.model}</Text></Car>
            <Type>Type: <Text>{test.type === 'bananaBox' ? 'banana box' : test.type}</Text></Type>
            <Date date={test.createdAt} format="D MMM YYYY" />
        </Wrapper>
    )
}

export { Test }