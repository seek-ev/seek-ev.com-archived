import React from 'react'

// Styles
import { Wrapper, HeaderLeft, HeaderRight } from './styles'

// Components
import { NewPicture } from './new-picture'
import { NewBasic } from './new-basic'

const NewHeader = (props) => {

    const carModel = (e) => {
        props.modelChanged(e)
    }

    const yearsChange = (e) => {
        props.yearsChanged(e)
    }

    const categoryChange = (e) => {
        props.categoryChanged(e)
    }

    const brandChange = (e) => {
        props.brandChanged(e)
    }

    const pictureChange = (pic) => {
        props.picChanged(pic)
    }

    const conceptChange = (e) => {
        props.conceptChanged(e)
    }

    return (
        <Wrapper>
            <HeaderLeft>
                <NewPicture pictureChange={pictureChange} />
            </HeaderLeft>
            <HeaderRight>
                <NewBasic categories={props.categories} brands={props.brands} modelChange={carModel} yearsChange={yearsChange} categoryChange={categoryChange} brandChange={brandChange} conceptChange={conceptChange} />
            </HeaderRight>
        </Wrapper>
    )
}

export { NewHeader }