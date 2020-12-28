import React, { useState } from 'react'

// Styles
import './owned_car.sass'

// Components
import { OwnedCarRemoveModal } from './owned-car-remove-modal'

// Icons
import { MdClose } from 'react-icons/md'

const OwnedCar = (props) => {
    const [remove, setRemove] = useState(false)

    const close = () => {
        setRemove(false)
    }

    const removeCar = (id) => {
        props.remove(id)
    }

    return (
        <div className="owned-car">
            <span>
                {`${props.car.version.timeline.year} ${props.car.version.timeline.car.brand.name} ${props.car.version.timeline.car.model} - ${props.car.version.name}`}
            </span>
            <MdClose className="owned-car-button" onClick={() => setRemove(true)} />
            <OwnedCarRemoveModal show={remove} version={props.car.id} close={close} remove={removeCar} />
        </div>
    )
}

export { OwnedCar }