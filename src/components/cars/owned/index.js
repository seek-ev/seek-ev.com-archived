import React from 'react'

// Components
import { OwnedCar } from './owned-car'
import { OwnedCarAddModal } from './owned-car-add-modal'

const OwnedCars = (props) => {
    const remove = (id) => {
        props.removeVersion(id)
    }

    const close = () => {
        props.close()
    }

    const addCar = (car) => {
        props.add(car)
    }

    return (
        <div className="user-owned-cars">
            <div className={props.owned.length > 0 ? '' : 'cars-hidden'}>{props.owned.map(o => {
                return <OwnedCar car={o} key={o.id} remove={remove} show={props.show} />
            })}</div>
            <div className={props.owned.length === 0 ? '' : 'cars-hidden'}>Do you own a car? Add it to your profile!</div>
            <OwnedCarAddModal show={props.show} close={close} add={addCar} />
        </div>
    )
}

export { OwnedCars }