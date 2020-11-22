import React, { useRef, useState } from 'react'

// Styles
import './picture.sass'

// Icons
import { MdImage, MdEdit } from 'react-icons/md'

const NewPicture = (props) => {
    const [pic, setPic] = useState(null)
    let picture = useRef()

    const upload = (e) => {
        const file = picture.current.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            setPic(reader.result)

            props.pictureChange(picture.current.files[0])
        }

        if (file) reader.readAsDataURL(file)
    }

    return (
        <div className={`new-picture ${pic ? 'remove-new-border' : ''}`}>
            <img src={pic ? pic : ''} alt="new_picture" className={pic ? '' : 'hide-new'} />
            <div className={`new-picture-button ${pic ? 'new-primary' : ''}`} onClick={() => picture.current.click()}>
                <MdImage className={`${pic ? 'hide-new' : ''}`} />
                <MdEdit className={`${pic ? '' : 'hide-new'}`} />
                <input ref={picture} onChange={upload} type="file" id="new_pic" name="new_pic" accept="image/png, image/jpeg" />
            </div>
        </div>
    )
}

export { NewPicture }