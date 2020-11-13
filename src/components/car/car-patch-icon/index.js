import React from 'react'
import { useSelector } from 'react-redux'

// Styles
import './icon.sass'

// Icons
import { MdEdit } from 'react-icons/md'

const CarPatchIcon = (props) => {
    const auth = useSelector(state => state.auth)

    return (
        <div className={`${auth.isLogged ? 'car-patch-icon' : 'car-hidden'}`}>
            <MdEdit />
        </div>
    )
}

export { CarPatchIcon }