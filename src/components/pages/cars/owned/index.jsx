import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { OwnedCar } from './owned-car'
import { OwnedCarAddModal } from './owned-car-add-modal'

const OwnedCars = ({ owned, show, removeVersion, close, add }) => {
    const remove = (id) => {
        removeVersion(id)
    }

    const closeModal = () => {
        close()
    }

    const addCar = (car) => {
        add(car)
    }

    return (
        <Wrapper className="user-owned-cars">
            {owned.map(o => {
                return <OwnedCar car={o} key={o.id} remove={remove} show={show} />
            })}

            {owned.length === 0 ? 'Do you own a car? Add it to your profile!' : ''}
            <OwnedCarAddModal show={show} close={closeModal} add={addCar} />
        </Wrapper>
    )
}

export { OwnedCars }