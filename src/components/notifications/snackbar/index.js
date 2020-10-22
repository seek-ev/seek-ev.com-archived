import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideSnackbar } from '../../../actions/snackbar'

// Styles
import './snackbar.sass'

const Snackbar = () => {
    const snackState = useSelector(state => state.snackbar)
    const dispatch = useDispatch()

    return (
        <div className={'snackbar ' +
            (snackState.show ? 'show-snack ' : 'hide-snack ') +
            (snackState.type === 'success' ? 'snack-success ' : snackState.type === 'error' ? 'snack-error ' : 'snack-basic ')
        }
        >
            <div className="snack-text">
                {snackState.text.response ? snackState.text.response.status === 429 ?
                    'Too many requests, please try again later.' : snackState.text.response.data ?
                        snackState.text.response.data.error ? snackState.text.response.data.snackState.error : snackState.text.response.data.message ? snackState.text.response.data.message
                            : snackState.text.toString() : snackState.text.response.statusText ? snackState.text.response.statusText : snackState.text : snackState.text.message ? snackState.text.message : snackState.text}
            </div>

            <button className="snack-button" onClick={() => dispatch(hideSnackbar())}>
                Close
            </button>
        </div>
    )
}

export { Snackbar }