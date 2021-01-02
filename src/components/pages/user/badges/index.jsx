import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, Badge, Tooltip } from './styles'

const UserBadges = ({ flags }) => {
    const [badges, setBadges] = useState([])

    useEffect(() => {
        setBadges([])
        if (flags & (1 << 1)) setBadges(b => [...b, 'staff'])
        if (flags & (1 << 2)) setBadges(b => [...b, 'partner'])
        if (flags & (1 << 3)) setBadges(b => [...b, 'patreon'])
        if (flags & (1 << 6)) setBadges(b => [...b, 'cc'])
        if (flags & (1 << 7)) setBadges(b => [...b, 'discord'])
        if (flags & (1 << 8)) setBadges(b => [...b, 'tester'])
    }, [flags])

    return (
        <Wrapper>
            {badges.includes('staff') ? <Badge>
                <img src="/badges/staff.svg" alt="staff-badge" />
                <Tooltip >Staff</Tooltip>
            </Badge> : ''}

            {badges.includes('partner') ? <Badge>
                <img src="/badges/partner.svg" alt="partner-badge" />
                <Tooltip >Partner</Tooltip>
            </Badge> : ''}

            {badges.includes('patreon') ? <Badge>
                <a href="https://www.patreon.com/seekev">
                    <img src="/badges/patreon.svg" alt="patreon-badge" />
                    <Tooltip>Patreon</Tooltip>
                </a>
            </Badge> : ''}

            {badges.includes('cc') ? <Badge>
                <img src="/badges/content.svg" alt="content-badge" />
                <Tooltip>Content creator</Tooltip>
            </Badge> : ''}

            {badges.includes('discord') ? <Badge>
                <a href="https://discord.gg/GQ4ddQM">
                    <img src="/badges/discord.svg" alt="discord-badge" />
                    <Tooltip>Discord member</Tooltip>
                </a>
            </Badge> : ''}

            {badges.includes('tester') ? <Badge>
                <img src="/badges/tester.svg" alt="tester-badge" />
                <Tooltip>Tester</Tooltip>
            </Badge> : ''}
        </Wrapper >
    )
}

export { UserBadges }