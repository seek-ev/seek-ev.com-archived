import React, { useState, useRef } from 'react'

// Styles
import { Avatar, AvatarImg, AvatarIcon } from './styles'

// Icons
import { MdModeEdit } from 'react-icons/md'

// Components
import { AvatarModal } from './modal'

const ProfileAvatar = ({ avatar }) => {
    const [show, setShow] = useState(false)
    const [avatarState, setAvatar] = useState(null)
    const avatarInput = useRef(null)

    const onAvatarChange = async (e) => {
        setAvatar(e.target.files[0])
        setShow(true)
    }

    const hideModal = () => {
        setAvatar(null)
        setShow(false)
        avatarInput.current.value = ''
    }

    return (
        <Avatar>
            <label htmlFor="file-input">
                <AvatarImg src={avatar ? avatar.url : 'se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="profile_avatar" />
                <AvatarIcon>
                    <MdModeEdit />
                </AvatarIcon>
            </label>

            <input id="file-input" name="new-avatar" type="file" accept="image/png, image/jpeg, image/gif" onChange={onAvatarChange} ref={avatarInput} />

            <AvatarModal show={show} handleClose={hideModal} avatar={avatarState} />
        </Avatar>
    )
}

export { ProfileAvatar }