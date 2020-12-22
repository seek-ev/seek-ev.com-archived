import React from 'react'

// Styles
import './title.sass'

const BrandTitle = ({ name, founded, back }) => {
    return (
        <div className={`brand-title ${founded ? '' : 'brand-title-no-founded'}`}>
            <div className={`brand-title-text ${back ? 'brand-title-light' : ''}`}>
                {name}
            </div>
            <div className={`${founded ? 'brand-title-founded' : 'brand-hidden'}`}>
                {founded}
            </div>
        </div>
    )
}

export { BrandTitle }