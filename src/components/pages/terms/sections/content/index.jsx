import React from 'react'

// Styles
import { Wrapper, Title, Content } from '../styles'

const UserContent = () => {
    return (
        <Wrapper>
            <Title>Your content</Title>
            <Content>
                Any data, text, graphics, photographs and their selection and arrangement,
                and any other materials uploaded to the Service by you is “Your Content.”
                You represent and warrant that Your Content is original to you and that you
                own the rights to such content, including the right to grant all of the rights and
                licenses in these Terms without the Company incurring any third party obligations or
                liability arising out of its exercise of such rights and licenses. All of Your Content
                is your sole responsibility and the Company is not responsible for any material that you upload,
                post, or otherwise make available. By uploading, distributing, transmitting or otherwise using
                Your Content with the Service, you grant to us a perpetual, nonexclusive, transferable,
                royalty-free, sublicensable, and worldwide license to use, host, reproduce, modify, adapt,
                publish, translate, create derivative works from, distribute, perform, and display
                Your Content in connection with operating and providing the Service.
                The Company does not guarantee the accuracy, quality, or integrity of any user content posted.
                By using the Service, you acknowledge and accept that you may be exposed to material you find
                offensive or objectionable. You agree that the Company will not under any circumstances be
                liable for any user content, including, but not limited to, errors in any user content,
                or any loss or damage incurred by use of user content. The Company reserves the right to
                remove and permanently delete Your Content from the Service with or without notice for
                any reason or no reason.
            </Content>
        </Wrapper>
    )
}

export { UserContent }