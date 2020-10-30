import React, { useState, useEffect } from 'react'

// Styles
import './badges.sass'

const UserBadges = (props) => {
    const [badges, setBadges] = useState([])

    useEffect(() => {
        if (props.flags & (1 << 1)) setBadges(b => [...b, 'staff'])
        if (props.flags & (1 << 2)) setBadges(b => [...b, 'partner'])
        if (props.flags & (1 << 3)) setBadges(b => [...b, 'patreon'])
        if (props.flags & (1 << 6)) setBadges(b => [...b, 'cc'])
        if (props.flags & (1 << 7)) setBadges(b => [...b, 'discord'])
        if (props.flags & (1 << 8)) setBadges(b => [...b, 'tester'])
    }, [props.flags])

    return (
        <div className={props.flags > 0 ? 'user-badges' : 'user-badges-hidden'}>
            <div className={badges.includes('staff') ? 'user-badge' : 'user-badge-hidden'}>
                <img src="/badges/staff.svg" alt="staff-badge" />
                <span className="user-badge-tooltip">Staff</span>
            </div>
            <div className={badges.includes('partner') ? 'user-badge' : 'user-badge-hidden'}>
                <img src="/badges/partner.svg" alt="partner-badge" />
                <span className="user-badge-tooltip">Partner</span>
            </div>
            <div className={badges.includes('patreon') ? 'user-badge' : 'user-badge-hidden'} >
                <a href="https://www.patreon.com/seekev">
                    <img src="/badges/patreon.svg" alt="patreon-badge" />
                    <span className="user-badge-tooltip">Patreon</span>
                </a>
            </div>
            <div className={badges.includes('cc') ? 'user-badge' : 'user-badge-hidden'}>
                <img src="/badges/content.svg" alt="content-badge" />
                <span className="user-badge-tooltip">Content creator</span>
            </div>
            <div className={badges.includes('discord') ? 'user-badge' : 'user-badge-hidden'}>
                <a href="https://discord.gg/GQ4ddQM">
                    <img src="/badges/discord.svg" alt="discord-badge" />
                    <span className="user-badge-tooltip">Discord member</span>
                </a>
            </div>
            <div className={badges.includes('tester') ? 'user-badge' : 'user-badge-hidden'} >
                <img src="/badges/tester.svg" alt="tester-badge" />
                <span className="user-badge-tooltip">Tester</span>
            </div>
        </div>
    )
}

export { UserBadges }