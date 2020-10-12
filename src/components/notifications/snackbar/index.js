import React from 'react'

// Styles
import './snackbar.sass'

const Snackbar = (props) => {
    return (
        <div className={'snackbar ' + 
            (props.show ? 'show-snack ' : 'hide-snack ') +
            (props.type === 'success' ? 'snack-success ' : props.type === 'error' ? 'snack-error ' : 'snack-basic ') 
            }
        >
            <div className="snack-text">
                {props.text}
            </div>
         
            <button className="snack-button">
                Close
            </button>
        </div>
    )
}

export default Snackbar