import React from 'react'

// Styles
import './header.sass'

// Components
import { BrandTitle } from './title'
import { BrandAvatar } from './avatar'
import { BrandDetails } from './details'

const BrandHeader = (props) => {
    return (
        <div className="brand-header">
            <div className={`brand-header-background ${props.back ? 'back' : 'no-back'}`} style={{
                backgroundImage: `url('${props.back ? props.back.url : ''}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <div className="brand-header-row">
                    <BrandAvatar avatar={props.avatar} />
                    <BrandTitle name={props.name} founded={props.founded} dark={props.back} />
                </div>
            </div>
            <BrandDetails description={props.description} website={props.website} areaServed={props.areaServed} headquarters={props.headquarters} />
        </div>
    )
}

export { BrandHeader }