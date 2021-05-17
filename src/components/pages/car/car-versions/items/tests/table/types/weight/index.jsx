import React from 'react'

// Styles
import { Table, Head, Body, TR, TDLink } from '../styles'

const Weight = ({ tests }) => {
    return (
        <Table>
            <Head>
                <TR>
                    <th>Front</th>
                    <th>Rear</th>
                    <th>Total</th>
                    <th>Distribution</th>
                    <th>Added by</th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => <TR key={t.id}>
                    <td>{t.test.front}</td>
                    <td>{t.test.rear}</td>
                    <td>{t.test.total}</td>
                    <td>{t.test.distribution}</td>
                    <TDLink onClick={() => { window.location = `/u/${t.user.username}` }}>{t.user.username}</TDLink>
                </TR>)}
            </Body>
        </Table>
    )
}

export { Weight }