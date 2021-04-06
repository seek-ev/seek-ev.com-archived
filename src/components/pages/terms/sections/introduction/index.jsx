import React from 'react'

// Styles
import { Wrapper, Title, Content, URL } from '../styles'

const Introduction = () => {
    return (
        <Wrapper>
            <Title>Introduction</Title>
            <Content>
                Welcome to Seek EV! These Terms of Service (“Terms”),
                which include and hereby incorporate the Privacy Policy
                at https://seek-ev.com/privacy (“Privacy Policy”),
                are a legal agreement between Seek EV and its related companies
                (the “Company,” “us,” “our,” or "we") and you ("you" or “your”).
                By using or accessing the Seek EV website located at <URL>https://seek-ev.com</URL>,
                which is collectively referred to as the “Service,”
                you agree that you are 13 years of age and the minimum age of digital consent in your country, if you are the age of majority in your jurisdiction or over, that you have read,
                understood, and accept to be bound by the Terms, and
                if you are between 13 (or the minimum age of digital consent, as applicable) and the age of majority in your jurisdiction,
                that your legal guardian has reviewed and agrees to these Terms.
                <br /><br />
                We ("Seek EV Team") reserve the right to update these Terms,
                which we may do for reasons that include,
                but are not limited to,
                complying with changes to the law or reflecting enhancements to Seek EV.
                If the changes affect your usage of Seek EV or your legal rights,
                we’ll notify you no less than seven days before the changes take effect.
                Unless we state otherwise, your continued use of the Service after we post modifications will constitute your acceptance of and agreement to those changes. If you object to the changes,
                your recourse shall be to cease using the Service.
            </Content>
        </Wrapper>
    )
}

export { Introduction }