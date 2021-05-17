import React from 'react'

// Styles
import { Table, Head, Body, TR, TDLink } from '../styles'

const Noise = ({ tests }) => {
    return (
        <Table>
            <Head>
                <TR>
                    <th>Tires</th>
                    <th>Season</th>
                    <th>Surface</th>
                    <th colSpan="3">Velocity</th>
                    <th>Wheel front</th>
                    <th>Wheel rear</th>
                    <th>Aftermarket soundproofing</th>
                    <th>Added by</th>
                </TR>
                <TR>
                    <th colSpan="3"></th>
                    <th>80 km/h</th>
                    <th>100 km/h</th>
                    <th>120 km/h</th>
                    <th colSpan="4"></th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => {
                    return t.test.velocity ? <TR key={t.id}>
                        <td>{t.test.tires}</td>
                        <td>{t.test.season}</td>
                        <td>{t.test.surface}</td>
                        <td>{t.test.velocity._80}dB</td>
                        <td>{t.test.velocity._100}dB</td>
                        <td>{t.test.velocity._120}dB</td>
                        <td>{t.test.wheelFront}</td>
                        <td>{t.test.wheelRear}</td>
                        <td>{t.test.aftermarketSoundproofing ? 'Yes' : 'No'}</td>
                        <TDLink onClick={() => { window.location = `/u/${t.user.username}` }}>{t.user.username}</TDLink>
                    </TR> : <TR key={t.id} />
                })}
            </Body>
        </Table>
    )
}

export { Noise }