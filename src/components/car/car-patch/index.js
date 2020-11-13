import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// Styles
import './icon.sass'

// Icons
import { MdEdit } from 'react-icons/md'

// Components
import { CarPatchForm } from './form'

const CarPatch = (props) => {
    const [show, setShow] = useState(false)
    const auth = useSelector(state => state.auth)

    const hide = () => {
        setShow(false)
    }

    return (
        <div className={`${auth.isLogged ? 'car-patch' : 'car-hidden'}`}>
            <CarPatchForm show={show} onClick={hide} carId={props.carId} />
            <div className="car-patch-icon" onClick={() => setShow(!show)}>
                <MdEdit />
            </div>
        </div>
    )
}

export { CarPatch }