import React, { useState } from 'react'

// Styles
import {
    Wrapper,
    CarWrapper,
    Picture,
    InfoWrapper,
    Info,
    InfoDetails,
    Category,
    Detail,
    Model,
    ColumnWrapper
} from './styles'

// Components
import { Button } from 'components/basic/button'
import { OwnedCarRemoveModal } from './owned-car-remove-modal'

const OwnedCar = ({ car, removeProps }) => {
    const [remove, setRemove] = useState(false)

    const close = () => {
        setRemove(false)
    }

    const removeCar = (id) => {
        removeProps(id)
    }

    return (
        <Wrapper to={{
            pathname: `${car.version.timeline.car.model}`,
            search: `?timeline=${car.version.timeline.year}&version=${car.version.name}`
        }}>
            <CarWrapper>
                <Picture>
                    <img src={car.version.timeline.car.pictures.length > 0 ? car.version.timeline.car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${car.id}`} />
                </Picture>
                <InfoWrapper>
                    <Info>
                        <InfoDetails>
                            <Model>
                                {car.version.timeline.car.model} {car.version.name}
                            </Model>
                            <Detail>
                                {car.version.timeline.year}
                            </Detail>
                        </InfoDetails>
                        {car.version.timeline.car.category ? <Category>{car.version.timeline.car.category.name}</Category> : ''}
                    </Info>
                    <ColumnWrapper>
                        {car.version.timeline.car.brand ? <Detail>{car.version.timeline.car.brand.shortName}</Detail> : ''}

                        <Button text="Remove" error onClick={() => setRemove(true)} />
                    </ColumnWrapper>
                </InfoWrapper>
            </CarWrapper>
            <OwnedCarRemoveModal show={remove} version={car.id} close={close} remove={removeCar} />
        </Wrapper>
    )
}

export { OwnedCar }