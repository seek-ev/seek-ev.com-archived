import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

// Styles
import { Wrapper, Verified, VerifiedIcon, RemoveButton, Modal, ModalContent, ModalText, ModalButtons } from './styles'

// Components
import { Button } from 'components/basic/button'

// Icons
import { MdDone, MdClear } from 'react-icons/md'

// Actions
import { showSnackbar } from 'actions/snackbar'

const UserCarDetails = ({ verified, onProcessing }) => {
    const [redirect, setRedirect] = useState(null)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()

    const removeCar = async () => {
        await setModal(false)
        await onProcessing(true)

        await axios.delete(`/cars/${params.id}`).then(res => {
            dispatch(showSnackbar('Success', 'success'))
            setRedirect('/cars')
        }).catch(async err => {
            dispatch(showSnackbar(err, 'error'))
            await onProcessing(false)
        })
    }

    if (redirect) {
        return <Redirect push to={redirect} />
    }

    return (
        <Wrapper className="user-car-details">
            <Verified verified={verified}>
                {verified ? 'Verified' : 'Unverified'}
                {verified ? <VerifiedIcon>
                    <MdDone />
                </VerifiedIcon> : <VerifiedIcon>
                        <MdClear />
                    </VerifiedIcon>}
            </Verified>

            {verified ? '' : <RemoveButton>
                <Button text="Remove" raise error onClick={() => setModal(true)} />
            </RemoveButton>}

            <Modal display={modal}>
                <ModalContent>
                    <ModalText>This action is irreversible are you sure?</ModalText>
                    <ModalButtons>
                        <Button text="No" error onClick={() => setModal(false)} />
                        <Button text="Yes" primary onClick={removeCar} />
                    </ModalButtons>
                </ModalContent>
            </Modal>
        </Wrapper>
    )
}

export { UserCarDetails }