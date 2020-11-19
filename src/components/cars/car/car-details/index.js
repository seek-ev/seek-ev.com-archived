import React from 'react'

// Styles
import './details.sass'

// Icons
import { MdDone, MdClear } from 'react-icons/md'

const UserCarDetails = (props) => {
    return (
        <div className="user-car-details">
            <div className={`user-car-details-verified ${props.verified ? 'verified' : 'unverified'}`}>
                {props.verified ? 'Verified' : 'Awaiting for a verification'}
                <div className={`${props.verified ? 'user-car-details-verified-icon' : 'user-car-hidden'}`}>
                    <MdDone />
                </div>
                <div className={`${!props.verified ? 'user-car-details-verified-icon' : 'user-car-hidden'}`}>
                    <MdClear />
                </div>
            </div>
        </div>
    )
}

export { UserCarDetails }