import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import './modal.sass'

// Icons
import { MdClose } from 'react-icons/md'

// Components
import { Button } from 'components/basic/button'

// Actions
import { setAvatar } from 'actions/user'
import { showSnackbar } from 'actions/snackbar'

const AvatarModal = ({ handleClose, show, avatar }) => {
    const showHideClassName = show ? "avatar-modal display-block" : "avatar-modal display-none"
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
        <div className={showHideClassName}>
            <section className="avatar-modal-main">
                <div className="avatar-modal-header">
                    <div className="avatar-modal-header-title">
                        Upload new avatar
                    </div>
                    <div className="avatar-modal-close">
                        <MdClose className={loading ? 'loading-disabled' : ''} onClick={() => handleClose()} />
                    </div>
                </div>

                <div className="modal-avatar-content">
                    <div className="modal-avatar">
                        <img src={avatarUrl || ''} alt="new_avatar" className={loading ? 'loading-opacity' : ''} />

                        <div className={loading ? 'modal-loading' : ''}></div>
                    </div>
                    <div className="modal-button">
                        <Button text="Save" primary raise onClick={uploadAvatar} disabled={loading} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export { AvatarModal }