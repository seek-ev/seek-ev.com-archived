import React from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to={`/${t.version.timeline.car.model}?timeline=${t.version.timeline.year}&version=${t.version.name}`}>
                        <td>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</td>
                    </Link>
                </TR>)}
            </Body>
        </Table>
    )
}

export { Banana }