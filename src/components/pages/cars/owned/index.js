import React from 'react'

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
        <div className="user-owned-cars">
            <div className={owned.length > 0 ? '' : 'cars-hidden'}>{owned.map(o => {
                return <OwnedCar car={o} key={o.id} remove={remove} show={show} />
            })}</div>
            <div className={owned.length === 0 ? '' : 'cars-hidden'}>Do you own a car? Add it to your profile!</div>
            <OwnedCarAddModal show={show} close={closeModal} add={addCar} />
        </div>
    )
}

export { OwnedCars }