import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

// Styles
import './details.sass'

// Components
import { Button } from 'components/basic/button'

// Icons
import { MdDone, MdClear } from 'react-icons/md'

// Actions
import { showSnackbar } from 'actions/snackbar'

const UserCarDetails = (props) => {
    const [redirect, setRedirect] = useState(null)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()

    const removeCar = async () => {
        await setModal(false)
        await props.onProcessing(true)

        await axios.delete(`/cars/${params.id}`).then(res => {
            dispatch(showSnackbar('Success', 'success'))
            setRedirect('/cars')
        }).catch(async err => {
            dispatch(showSnackbar(err, 'error'))
            await props.onProcessing(false)
        })
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return (
        <div className="user-car-details">
            <div className={`user-car-details-verified ${props.verified ? 'verified' : 'unverified'}`}>
                {props.verified ? 'Verified' : 'Unverified'}
                <div className={`${props.verified ? 'user-car-details-verified-icon' : 'user-car-hidden'}`}>
                    <MdDone />
                </div>
                <div className={`${!props.verified ? 'user-car-details-verified-icon' : 'user-car-hidden'}`}>
                    <MdClear />
                </div>
            </div>
            <div className={`user-car-details-remove-button ${props.verified ? 'user-car-hidden' : ''}`}>
                <Button text="Remove" raise error onClick={() => setModal(true)} />
            </div>
            <div className={`${modal ? 'user-car-details-modal user-car-details-modal-block' : 'user-car-hidden'}`}>
                <div className="user-car-details-modal-content">
                    <div className="user-car-details-modal-text">This action is irreversible are you sure?</div>
                    <div className="user-car-details-modal-buttons">
                        <Button text="No" error onClick={() => setModal(false)} />
                        <Button text="Yes" primary onClick={removeCar} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserCarDetails }