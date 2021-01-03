import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Modal, ModalContent, Header, HeaderTitle, Close, AvatarContent, Avatar, ModalButton, Loading } from './styles'

// Icons
import { MdClose } from 'react-icons/md'

// Components
import { Button } from 'components/basic/button'

// Actions
import { setAvatar } from 'actions/user'
import { showSnackbar } from 'actions/snackbar'

const AvatarModal = ({ handleClose, show, avatar }) => {
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const fd = new FormData()

    useEffect(() => {
        const reader = new FileReader()
        if (avatar) {
            reader.onload = (e) => {
                setAvatarUrl(e.target.result)
            }
            reader.readAsDataURL(avatar)
        }
    }, [avatar])

    const uploadAvatar = async () => {
        setLoading(true)

        if (
            (avatar.type !== 'image/jpeg' &&
                avatar.type !== 'image/png') && avatar.type !== 'image/gif'
        ) {
            dispatch(showSnackbar('Ops, we can\'t accept this file type!', 'error'))
            setLoading(false)
            handleClose()
            return
        }

        fd.append('image', avatar)

        await axios.post('/avatar/user', fd, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(res => {
            dispatch(setAvatar(res.data.url))
            dispatch(showSnackbar('Avatar changed', 'success'))
        }).catch(err => {
            dispatch(showSnackbar(err, 'error'))
        })

        setLoading(false)
        handleClose()
    }

    return (
        <Modal show={show}>
            <ModalContent>
                <Header>
                    <HeaderTitle>
                        Upload new avatar
                    </HeaderTitle>
                    <Close disabled={loading}>
                        <MdClose onClick={() => handleClose()} />
                    </Close>
                </Header>

                <AvatarContent>
                    <Avatar opacity={loading}>
                        <img src={avatarUrl || ''} alt="new_avatar" />

                        {loading ? <Loading /> : ''}
                    </Avatar>
                    <ModalButton className="modal-button">
                        <Button text="Save" primary raise onClick={uploadAvatar} disabled={loading} />
                    </ModalButton>
                </AvatarContent>
            </ModalContent>
        </Modal>
    )
}

export { AvatarModal }