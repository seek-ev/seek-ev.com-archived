import React, { useState } from 'react'

// Styles
import { Wrapper, WrapperRow, CarButton } from './styles'

// Components
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
        <Wrapper>
            <WrapperRow>
                <span>
                    {`${car.version.timeline.year} ${car.version.timeline.car.brand.name} ${car.version.timeline.car.model} - ${car.version.name}`}
                </span>
                <CarButton onClick={() => setRemove(true)} />
            </WrapperRow>
            <OwnedCarRemoveModal show={remove} version={car.id} close={close} remove={removeCar} />
        </Wrapper>
    )
}

export { OwnedCar }