import React from 'react'

// Styles
import { Wrapper, Title, Content, Ul, Li } from '../styles'

const Collect = () => {
    return (
        <Wrapper>
            <Title>Information we collect</Title>
            <Content>
                We collect the following types of information.

                <span>Information you provide us directly:</span>
                <Ul>
                    <Li>Your username, email and password when you register for an Seek EV account.</Li>
                    <Li>Profile information that you provide for your user profile (e.g., picture, your website url, discord username).</Li>
                    <Li>User content (e.g., tests) that you post to the service.</Li>
                    <Li>Communication between you and Seek EV. For example we can send you Service-related emails (e.g., changes/update to features of Seek EV). Note that you can't opt out of Service-related e-mails.</Li>
                </Ul>
            </Content>
        </Wrapper>
    )
}

export { Collect }