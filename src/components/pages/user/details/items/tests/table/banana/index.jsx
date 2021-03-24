import React from 'react'

// Styles
import { Table, Head, Body, TR } from '../styles'

const Banana = ({ tests }) => {
    return (
        <Table>
            <Head>
                <TR>
                    <th>Frunk</th>
                    <th>Trunk</th>
                    <th>Seats folded</th>
                    <th>
                        Car
                    </th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => <TR key={t.id}>
                    <td>{t.test.frunk}</td>
                    <td>{t.test.trunk}</td>
                    <td>{t.test.seatsFolded}</td>
                    <td>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</td>
                </TR>)}
            </Body>
        </Table>
    )
}

export { Banana }