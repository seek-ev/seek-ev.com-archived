import React from 'react'

// Styles
import { Wrapper, Title, Content } from '../styles'

const HowCollect = () => {
    return (
        <Wrapper>
            <Title>How Do We Collect Information?</Title>
            <Content>
                We collect the following types of information. <br /><br />

                <span>Information That You Give Us:</span>
                Typically the information we collect directly from you are your username, password, email.
                <br /><br />
                <span>Information We Collect Automatically: </span>
                When you interact with us through the Services, we receive and store certain information such as an IP address
                and your activities within the Services. We may store such information or such information may be included in
                databases owned and maintained by affiliates, agents or service providers.
                The Services may use such information and pool it with other information to track, for example, the total number of visitors to our Site.
            </Content>
        </Wrapper>
    )
}

export { HowCollect }