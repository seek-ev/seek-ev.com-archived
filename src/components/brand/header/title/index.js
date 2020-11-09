import React from 'react'

// Styles
import './title.sass'

const BrandTitle = (props) => {
    return (
        <div className={`brand-title ${props.founded ? '' : 'brand-title-no-founded'}`}>
            <div className="brand-title-text">
                {props.name}
            </div>
            <div className={`${props.founded ? 'brand-title-founded' : 'brand-hidden'}`}>
                {props.founded}
            </div>
        </div>
    )
}

export { BrandTitle }