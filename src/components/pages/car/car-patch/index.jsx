import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// Styles
import { Wrapper, Icon } from './styles'

// Icons
import { MdEdit } from 'react-icons/md'

// Components
import { CarPatchForm } from './form'

const CarPatch = (props) => {
    const [show, setShow] = useState(false)
    const auth = useSelector(state => state.auth)

    const hide = () => {
        setShow(false)
    }

    return (
        <Wrapper logged={auth.isLogged}>
            <CarPatchForm show={show} onClick={hide} carId={props.carId} />
            <Icon onClick={() => setShow(!show)}>
                <MdEdit />
            </Icon>
        </Wrapper>
    )
}

export { CarPatch }