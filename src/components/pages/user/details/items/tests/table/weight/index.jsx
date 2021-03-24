import React from 'react'

// Styles
import { Table, Head, Body, TR } from '../styles'

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
                    <td>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</td>
                </TR>)}
            </Body>
        </Table>
    )
}

export { Weight }