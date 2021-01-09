import React from 'react'

// Styles
import { Wrapper, Background, HeaderRow } from './styles'

// Components
import { BrandTitle } from './title'
import { BrandAvatar } from './avatar'
import { BrandDetails } from './details'

const BrandHeader = ({ back, avatar, name, founded, description, website, areaServed, headquarters }) => {
    return (
        <Wrapper>
            <Background back={back}>
                <HeaderRow>
                    <BrandAvatar avatar={avatar} />
                    <BrandTitle name={name} founded={founded} back={back} />
                </HeaderRow>
            </Background>
            <BrandDetails description={description} website={website} areaServed={areaServed} headquarters={headquarters} />
        </Wrapper>
    )
}

export { BrandHeader }