import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import './modal.sass'

// Components
import { Button } from '../../../../basic/button'

// Actions
import { showSnackbar } from '../../../../../actions/snackbar'

const OwnedCarRemoveModal = ({ show, version, close, remove }) => {
    const showHideClassName = show ? "owned-car-remove-modal display-block" : "owned-car-remove-modal display-none"
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const removeVersion = async () => {
        setLoading(true)

        await axios.delete(`/users/@me/cars/owned/${version}`).then(res => {
            dispatch(showSnackbar('Success', 'success'))
            setLoading(false)
            close()
            remove(version)
        }).catch(err => {
            dispatch(showSnackbar(err, 'error'))
            setLoading(false)
            close()
        })
    }

    return (
        <div className={showHideClassName}>
            <div className={`${!loading ? 'owned-car-modal-remove-content' : 'cars-hidden'}`}>
                <div className="owned-car-modal-remove-header">Are you sure that you want to remove this car from owned?</div>
                <div className="owned-car-modal-remove-buttons">
                    <Button text="Cancel" error onClick={() => close()} />
                    <div className="owned-car-modal-remove-buttons-ml">
                        <Button text="Yes" primary onClick={() => removeVersion()} />
                    </div>
                </div>
            </div>
            <div className={`${loading ? 'owned-car-modal-remove-loading' : 'cars-hidden'}`}>
                <div className='modal-loading'></div>
            </div>
        </div>
    )
}

export { OwnedCarRemoveModal }