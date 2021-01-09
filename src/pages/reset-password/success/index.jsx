import React from 'react'

// Styles
import { Wrapper, HomeLink, Logo, Title, TitleP } from './styles'

const ResetSuccess = () => {
    return (
        <Wrapper>
            <HomeLink to="/">
                <Logo src="../se_dark.png" alt="dark-logo" />
            </HomeLink>
            <Title>
                <TitleP>Email was sent.</TitleP>
                You can now close this page.
            </Title>
        </Wrapper>
    )
}

export default ResetSuccess