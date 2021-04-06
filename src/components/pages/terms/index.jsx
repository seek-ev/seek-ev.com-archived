import React from 'react'

// Styles
import { Wrapper, Note } from './styles'

// Components
import { TermsHeader } from 'components/pages/terms/header'

// Sections
import { Rights } from './sections/rights'
import { Account } from './sections/account'
import { ThridParty } from './sections/third'
import { Conduct } from './sections/conduct'
import { UserContent } from './sections/content'
import { Termination } from './sections/terminatation'
import { Intellectual } from './sections/intellectual'
import { Introduction } from './sections/introduction'
import { Communications } from './sections/communications'
import { Indemnification } from './sections/indemnification'

const Terms = () => {
    return (
        <Wrapper>
            <TermsHeader />

            <Introduction />
            <Rights />
            <Account />
            <Communications />
            <Intellectual />
            <UserContent />
            <Conduct />
            <ThridParty />
            <Termination />
            <Indemnification />

            <Note>
                <span>Contact.</span> If you have any questions about these Terms, please contact via our <a href="https://discord.gg/GQ4ddQM">discord server</a>.
            </Note>
        </Wrapper>
    )
}

export { Terms }