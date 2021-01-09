import React from 'react'

// Styles
import { Container, HomeLink, Logo, SuccessTitle, SuccessTitleP, SuccessLink } from '../styles'

const ResetSuccess = () => {
    return (
        <Container>
            <HomeLink to="/">
                <Logo src="../se_dark.png" alt="dark-logo" />
            </HomeLink>
            <SuccessTitle>
                <SuccessTitleP>Password changed successfully</SuccessTitleP>
                You can now proceed to <SuccessLink to='/login'>Login Page</SuccessLink>
                <br /> and log in with your new password.
            </SuccessTitle>
        </Container >
    )
}

export default ResetSuccess