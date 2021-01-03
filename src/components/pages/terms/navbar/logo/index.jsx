import React from 'react'

// Styles
import { Logo, Image, Brand } from './style'

export const TermsLogo = () => {
    return (
        <Logo to="/">
            <Image src="/se_dark.png" alt="tos_logo" />
            <Brand>
                SEEK EV
            </Brand>
        </Logo>
    )
}