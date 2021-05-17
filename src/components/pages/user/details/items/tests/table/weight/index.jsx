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
                    <th>
                        Car
                    </th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => <TR key={t.id}>
                    <td>{t.test.front}</td>
                    <td>{t.test.rear}</td>
                    <td>{t.test.total}</td>
                    <td>{t.test.distribution}</td>
                    <TDLink onClick={() => { window.location = `/${t.version.timeline.car.model}?timeline=${t.version.timeline.year}&version=${t.version.name}` }}>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</TDLink>
                </TR>)}
            </Body>
        </Table>
    )
}

export { Weight }