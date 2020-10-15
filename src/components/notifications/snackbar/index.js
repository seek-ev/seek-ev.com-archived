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
                {snackState.text}
            </div>
     
            <button className="snack-button" onClick={() => dispatch(hideSnackbar())}>
                Close
            </button>
        </div>
    )
}

export default Snackbar