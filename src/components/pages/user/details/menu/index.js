import React, { useState } from 'react'

// Styles
import './menu.sass'

const DetailsMenu = ({ itemChange }) => {
    const [item, setItem] = useState('cars')

    const changeItem = (item) => {
        itemChange(item)
        setItem(item)
    }

    return (
        <div className="user-details-menu">
            <div className={`user-details-menu-item ${item === 'cars' ? 'user-details-menu-item-chose' : ''}`} onClick={() => changeItem('cars')}>Cars</div>

            <div className={`user-details-menu-item item-disabled`}>Tests</div>

            <div className={`user-details-menu-item item-disabled`}>Requests</div>
        </div>
    )
}

export { DetailsMenu }