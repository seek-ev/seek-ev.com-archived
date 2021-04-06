import React from 'react'

// Styles
import { Wrapper, Title, Content, } from '../styles'

const Account = () => {
    return (
        <Wrapper>
            <Title>Your account</Title>
            <Content>
                You are responsible for your log-in credentials and
                for any activity resulting from the use of your log-in
                credentials or other activity on your account (“Account”) on the Service.
                Upon launching the Service,
                if you do not already have an Account,
                you will be prompted to create one by providing a username, valid email address and a password.
                You represent and warrant that the information you provide to
                us upon registration and at all other times will be true, accurate,
                current, and complete. We reserve the right to reject any username or
                to terminate your username or prevent use of a username in our sole discretion,
                and without any liability to you.
                You will ensure that your e-mail address is kept accurate and up-to-date at all times.
                You are responsible for maintaining the confidentiality of
                your log-in credentials and are fully responsible for all
                activities that occur through the use of your credentials or otherwise on your Account.
                You agree to notify us immediately if you believe the confidentiality of
                your log-in credentials has been compromised or if you suspect unauthorized use of your Account.
                You agree that we will not be liable for any loss or damage arising from unauthorized use of your credentials.
            </Content>
        </Wrapper>
    )
}

export { Account }