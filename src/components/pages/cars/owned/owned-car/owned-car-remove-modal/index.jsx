import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, ModalContent, Header, Buttons, ButtonMl, LoadingWrapper, Loading } from './styles'

// Components
import { Button } from 'components/basic/button'

// Actions
import { showSnackbar } from 'actions/snackbar'

const OwnedCarRemoveModal = ({ show, version, close, remove }) => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const removeVersion = async () => {
        setLoading(true)

        await axios.delete(`/users/@me/cars/${version}`).then(res => {
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
        <Wrapper show={show}>
            {!loading ?
                <ModalContent>
                    <Header>Are you sure that you want to remove this car from owned?</Header>
                    <Buttons>
                        <Button text="Cancel" error onClick={() => close()} />
                        <ButtonMl>
                            <Button text="Yes" primary onClick={() => removeVersion()} />
                        </ButtonMl>
                    </Buttons>
                </ModalContent>
                :
                <LoadingWrapper>
                    <Loading />
                </LoadingWrapper>
            }


        </Wrapper>
    )
}

export { OwnedCarRemoveModal }