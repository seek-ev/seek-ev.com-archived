import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// Styles
import {
    Wrapper,
    Form,
    FormContent,
    FormHead,
    FormTitle,
    FormClose,
    FormTextbox,
    Footer,
    LoadingWrapper,
    Loading
} from './styles'

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
        <Wrapper>
            {props.show ? <Form>
                {!loading ? <FormContent>
                    <FormHead>
                        <FormTitle>What would you like to change?</FormTitle>
                        <FormClose onClick={() => close()}>
                            <MdClose />
                        </FormClose>
                    </FormHead>
                    <FormTextbox>
                        <textarea placeholder="Describe changes to the car here (min. 20 characters)" onChange={(e) => onChange(e)}>
                        </textarea>
                    </FormTextbox>
                    <Footer>
                        <Button disabled={description.length <= 20} text="Send request" primary onClick={() => sendRequest()} />
                    </Footer>
                </FormContent>
                    : <LoadingWrapper>
                        <Loading>
                        </Loading>
                    </LoadingWrapper>
                }
            </Form> : ''}
        </Wrapper>
    )
}

export { CarPatchForm }