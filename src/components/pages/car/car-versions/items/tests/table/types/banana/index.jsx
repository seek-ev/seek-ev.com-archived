import React from 'react'

// Styles
import { Table, Head, Body, TR, TDLink } from '../styles'

const Banana = ({ tests }) => {
    return (
        <Table>
            <Head>
                <TR>
                    <th>Frunk</th>
                    <th>Trunk</th>
                    <th>Seats folded</th>
                    <th>Added by</th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => <TR key={t.id}>
                    <td>{t.test.frunk}</td>
                    <td>{t.test.trunk}</td>
                    <td>{t.test.seatsFolded}</td>
                    <TDLink onClick={() => { window.location = `/u/${t.user.username}` }}>{t.user.username}</TDLink>
                </TR>)}
            </Body>
        </Table>
    )
}

export { Banana }