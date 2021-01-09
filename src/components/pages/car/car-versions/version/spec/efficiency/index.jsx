import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContent, SpecItemContentItem } from '../styles'

const SpecEfficiency = (props) => {
    const [efficiency, setEfficiency] = useState({})

    useEffect(() => {
        if (props.efficiency) setEfficiency(props.efficiency)
    }, [props.efficiency])

    return (
        <SpecItem show={props.efficiency}>
            <SpecItemContentTitle>
                Efficiency
            </SpecItemContentTitle>
            <SpecItemContent>
                <SpecItemContentItem>
                    <span>Miles per galon:</span> {efficiency.mpg}
                </SpecItemContentItem>
                <SpecItemContentItem>
                    <span>Kilometers per liter:</span> {efficiency.kpl}
                </SpecItemContentItem>
            </SpecItemContent>
        </SpecItem>
    )
}

export { SpecEfficiency }