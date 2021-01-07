import React, { useState } from 'react'

// Styles
import { Wrapper, WrapperRow, CarButton } from './styles'

// Components
import { OwnedCarRemoveModal } from './owned-car-remove-modal'



const OwnedCar = (props) => {
    const [remove, setRemove] = useState(false)

    const close = () => {
        setRemove(false)
    }

    const removeCar = (id) => {
        props.remove(id)
    }

    return (
        <Wrapper>
            <WrapperRow>
                <span>
                    {`${props.car.version.timeline.year} ${props.car.version.timeline.car.brand.name} ${props.car.version.timeline.car.model} - ${props.car.version.name}`}
                </span>
                <CarButton onClick={() => setRemove(true)} />
            </WrapperRow>
            <OwnedCarRemoveModal show={remove} version={props.car.id} close={close} remove={removeCar} />
        </Wrapper>
    )
}

export { OwnedCar }