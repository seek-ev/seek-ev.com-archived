import React, { useEffect, useState } from 'react'

// Styles
import { SpecItem, SpecItemContentTitle, SpecItemContentRow, SpecItemContentItem, VersionMarginRight, VersionNoMaring } from '../styles'

const SpecCapacity = (props) => {
    const [capacity, setCapacity] = useState({})

    useEffect(() => {
        if (props.capacity) setCapacity(props.capacity)
    }, [props.capacity])

    return (
        <SpecItem show={props.capacity}>
            <SpecItemContentTitle>
                Capacity
            </SpecItemContentTitle>
            <SpecItemContentRow>
                <VersionMarginRight>
                    <SpecItemContentItem>
                        <span>Passengers:</span> {capacity.passengers} seats
                    </SpecItemContentItem>
                    {capacity.cargoSpace ? <SpecItemContentItem>
                        <span>Cargo space:</span> {capacity.cargoSpace}l
                    </SpecItemContentItem> : ''}
                </VersionMarginRight>
                <VersionNoMaring>
                    {capacity.towingKG ? <SpecItemContentItem>
                        <span>Towing in kg:</span> {capacity.towingKG}kg
                    </SpecItemContentItem>
                        : ''}
                    {capacity.towingLB ? <SpecItemContentItem>
                        <span>Towing in lb:</span> {capacity.towingLB}lb
                    </SpecItemContentItem> : ''}
                </VersionNoMaring>
            </SpecItemContentRow>
        </SpecItem>
    )
}

export { SpecCapacity }