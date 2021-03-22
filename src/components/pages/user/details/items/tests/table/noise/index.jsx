import React from 'react'

// Styles
import { Table, Head, Body, TR } from '../styles'

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
                    <th>
                        Car
                    </th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => {
                    return t.test.velocity ? <TR key={t.id}>
                        <td>{t.test.tires}</td>
                        <td>{t.test.season}</td>
                        <td>{t.test.surface}</td>
                        <td>{t.test.velocity._80} km/h</td>
                        <td>{t.test.velocity._100} km/h</td>
                        <td>{t.test.velocity._120} km/h</td>
                        <td>{t.test.wheelFront}</td>
                        <td>{t.test.wheelRear}</td>
                        <td>{t.test.aftermarketSoundproofing ? 'yes' : 'no'}</td>
                        <td>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</td>
                    </TR> : ''
                })}
            </Body>
        </Table>
    )
}

export { Noise }