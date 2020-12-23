import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// Styles
import './form.sass'

// Icons
import { MdClose } from 'react-icons/md'

// Components
import { Button } from 'components/basic/button'

// Actions
import { showSnackbar } from 'actions/snackbar'

const CarPatchForm = (props) => {
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    function close() {
        props.onClick()
    }

    const onChange = (e) => {
        setDescription(e.target.value)
    }

    const sendRequest = async () => {
        setLoading(true)
        if (!props.carId) return
        await axios.patch(`/cars/${props.carId}`, { description }).then(res => {
            dispatch(showSnackbar('Request sent', 'success'))
            props.onClick()
        }).catch(err => dispatch(showSnackbar(err, 'error')))
        setLoading(false)
    }

    return (
        <div className={`${props.show ? 'car-patch-form' : 'car-hidden'}`}>
            <div className={`${loading ? 'car-hidden' : ''}`}>
                <div className="car-patch-form-head">
                    <div className="car-patch-form-title">What would you like to change?</div>
                    <div className="car-patch-form-close" onClick={() => close()}>
                        <MdClose />
                    </div>
                </div>
                <div className="car-patch-form-textbox">
                    <textarea placeholder="Describe changes to the car here (min. 20 characters)" onChange={(e) => onChange(e)}>
                    </textarea>
                </div>
                <div className="car-patch-form-footer">
                    <Button disabled={description.length <= 20} text="Send request" primary onClick={() => sendRequest()} />
                </div>
            </div>
            <div className={`${loading ? 'car-patch-loading' : 'car-hidden'}`}>
                <div className="loading-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                Sending...
            </div>
        </div>
    )
}

export { CarPatchForm }