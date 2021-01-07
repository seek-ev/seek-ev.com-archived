import React, { useRef, useState } from 'react'

// Styles
import { Wrapper, Image, NewButton } from './styles'

// Icons
import { MdImage, MdEdit } from 'react-icons/md'

const NewPicture = ({ pictureChange }) => {
    const [pic, setPic] = useState(null)
    let picture = useRef()

    const upload = (e) => {
        const file = picture.current.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            setPic(reader.result)

            pictureChange(picture.current.files[0])
        }

        if (file) reader.readAsDataURL(file)
    }

    return (
        <Wrapper pic={pic}>
            {pic ? <Image src={pic ? pic : ''} alt="new_picture" /> : ''}
            <NewButton pic={pic} onClick={() => picture.current.click()}>
                {pic ? <MdEdit /> : <MdImage />}
                <input ref={picture} onChange={upload} type="file" id="new_pic" name="new_pic" accept="image/png, image/jpeg" />
            </NewButton>
        </Wrapper>
    )
}

export { NewPicture }