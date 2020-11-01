import React, { useState, useRef } from 'react'

// Icons
import { MdModeEdit } from 'react-icons/md'

// Styles
import './avatar.sass'

// Components
import { AvatarModal } from './modal'

const ProfileAvatar = (props) => {
    const [show, setShow] = useState(false)
    const [avatar, setAvatar] = useState(null)
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
        <div className="profile-avatar">
            <label htmlFor="file-input">
                <img className="profile-avatar-img" src={props.avatar ? props.avatar.url : 'se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt="profile_avatar" />
                <div className="profile-avatar-icon">
                    <MdModeEdit />
                </div>
            </label>

            <input id="file-input" name="new-avatar" type="file" accept="image/png, image/jpeg, image/gif" onChange={onAvatarChange} ref={avatarInput} />

            <AvatarModal show={show} handleClose={hideModal} avatar={avatar} />
        </div>
    )
}

export { ProfileAvatar }