import React from 'react'

// Styles
import './header.sass'

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

    return (
        <div className="new-header">
            <div className="new-header-left">
                <NewPicture pictureChange={pictureChange} />
            </div>
            <div className="new-header-right">
                <NewBasic categories={props.categories} brands={props.brands} modelChange={carModel} yearsChange={yearsChange} categoryChange={categoryChange} brandChange={brandChange} />
            </div>
        </div>
    )
}

export { NewHeader }