import React from 'react'

// Styles
import { Logo, Image, Brand } from './style'

export const TermsLogo = () => {
    return (
        <Logo to="/" className="tos-logo">
            <Image src="/se_dark.png" alt="tos_logo" />
            <Brand className="tos-logo-brand">
                SEEK EV
            </Brand>
        </Logo>
    )
}