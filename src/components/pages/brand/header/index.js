import React from 'react'

// Styles
import './header.sass'

// Components
import { BrandTitle } from './title'
import { BrandAvatar } from './avatar'
import { BrandDetails } from './details'

const BrandHeader = ({ back, avatar, name, founded, description, website, areaServed, headquarters }) => {
    return (
        <div className="brand-header">
            <div className={`brand-header-background ${back ? 'back' : 'no-back'}`} style={{
                backgroundImage: `url('${back ? back.url : ''}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <div className="brand-header-row">
                    <BrandAvatar avatar={avatar} />
                    <BrandTitle name={name} founded={founded} back={back} />
                </div>
            </div>
            <BrandDetails description={description} website={website} areaServed={areaServed} headquarters={headquarters} />
        </div>
    )
}

export { BrandHeader }