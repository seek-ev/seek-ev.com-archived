import React, { useState } from 'react'

// Styles
import './car_menu.sass'

// Icons
import { MdLibraryBooks, MdPeople, MdForum } from 'react-icons/md'

const CarMenu = (props) => {
    const [item, setItem] = useState('versions')

    return (
        <div className="car-menu">
            <div className={`car-menu-item ${item === 'versions' ? 'car-menu-item-chose ' : ''} ${props.versions && props.versions.length > 0 ? '' : 'car-menu-item-disabled'}`} onClick={() => setItem('versions')}>
                <div className="car-menu-item-column">
                    <div className="car-menu-item-title">Versions</div>
                    <div className="car-menu-item-description">
                        Different versions of the car
                </div>
                </div>
                <div className="car-menu-item-icon">
                    <MdLibraryBooks />
                </div>
            </div>

            <div className={`car-menu-item ${item === 'tests' ? 'car-menu-item-chose ' : ''}car-menu-item car-menu-item-disabled`}>
                <div className="car-menu-item-column">
                    <div className="car-menu-item-title">Tests <span>(Soon)</span></div>
                    <div className="car-menu-item-description">
                        Tests added by users
                    </div>
                </div>
                <div className="car-menu-item-icon">
                    <MdPeople />
                </div>
            </div>
            <div className={`car-menu-item ${item === 'reviews' ? 'car-menu-item-chose ' : ''}car-menu-item car-menu-item-disabled`}>
                <div className="car-menu-item-column">
                    <div className="car-menu-item-title">Reviews <span>(Soon)</span></div>
                    <div className="car-menu-item-description">
                        Reviews left by users.
                    </div>
                </div>
                <div className="car-menu-item-icon">
                    <MdForum />
                </div>
            </div>
        </div>
    )
}

export { CarMenu }