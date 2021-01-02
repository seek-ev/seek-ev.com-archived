import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideSnackbar } from 'actions/snackbar'

// Styles
import { Wrapper, SnackText, SnackButton } from './styles'

const Snackbar = () => {
    const snackState = useSelector(state => state.snackbar)
    const dispatch = useDispatch()

    return (
        <Wrapper show={snackState.show} type={snackState.type} >
            <SnackText>
                {snackState.text.response ? snackState.text.response.status === 429 ?
                    'Too many requests, please try again later.' : snackState.text.response.data ?
                        snackState.text.response.data.error ? snackState.text.response.data.error : snackState.text.response.data.message ? snackState.text.response.data.message
                            : snackState.text.toString() : snackState.text.response.statusText ? snackState.text.response.statusText : snackState.text : snackState.text.message ? snackState.text.message : snackState.text}
            </SnackText>

            <SnackButton onClick={() => dispatch(hideSnackbar())}>
                Close
            </SnackButton>
        </Wrapper>
    )
}

export { Snackbar }