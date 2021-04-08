import React from 'react'

// Styles
import { Wrapper, Note } from './styles'

// Components
import { PrivacyHeader } from 'components/pages/privacy/header'

// Sections
import { Usage } from './sections/usage'
import { Links } from './sections/links'
import { Collect } from './sections/collect'
import { Changes } from './sections/changes'
import { Dispute } from './sections/dispute'
import { Business } from './sections/business'
import { Children } from './sections/children'
import { Security } from './sections/security'
import { HowCollect } from './sections/how-collect'


const Privacy = () => {
    return (
        <Wrapper>
            <PrivacyHeader />

            <Collect />
            <HowCollect />
            <Usage />
            <Children />
            <Security />
            <Links />
            <Business />
            <Dispute />
            <Changes />

            <Note>
                <span>Contact.</span> If you have any questions about our Privacy Policy, please contact via our <a href="https://discord.gg/GQ4ddQM">discord server</a>.
            </Note>
        </Wrapper>
    )
}

export { Privacy }