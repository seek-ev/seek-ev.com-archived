import React from 'react'

// Styles
import { Wrapper, Title, Content } from '../styles'

const Security = () => {
    return (
        <Wrapper>
            <Title>Security</Title>
            <Content>
                We take reasonable steps to protect the information provided via the Services from loss, misuse,
                and unauthorized access, disclosure, alteration, or destruction.
                However, no Internet or email transmission is ever fully secure or error free.
                In particular, email sent to or from the Services may not be secure.
                Therefore, you should take special care in deciding what information you send to us via email.
                Please keep this in mind when disclosing any information via the Internet.
            </Content>
        </Wrapper>
    )
}

export { Security }