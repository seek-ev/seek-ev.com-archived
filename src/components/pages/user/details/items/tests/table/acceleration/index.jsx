import React from 'react'

// Styles
import { Table, Head, Body, TR, TDLink } from '../styles'

const Acceleration = ({ tests }) => {
    return (
        <Table>
            <Head>
                <TR>
                    <th>0 to 10 km/h</th>
                    <th>0 to 20 km/h</th>
                    <th>0 to 30 km/h</th>
                    <th>0 to 40 km/h</th>
                    <th>0 to 50 km/h</th>
                    <th>0 to 60 km/h</th>
                    <th>0 to 70 km/h</th>
                    <th>0 to 80 km/h</th>
                    <th>0 to 90 km/h</th>
                    <th>0 to 100 km/h</th>
                    <th>0 to 200 km/h</th>
                    <th>Tires</th>
                    <th>Wheel front</th>
                    <th>Wheel rear</th>
                    <th>Spec time</th>
                    <th>Test vs Spec</th>
                    <th>
                        Car
                    </th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => t.test.times ? <TR key={t.id}>
                    {t.test.times._0to10 ? <td>{t.test.times._0to10}s</td> : <td></td>}
                    {t.test.times._0to20 ? <td>{t.test.times._0to20}s</td> : <td></td>}
                    {t.test.times._0to30 ? <td>{t.test.times._0to30}s</td> : <td></td>}
                    {t.test.times._0to40 ? <td>{t.test.times._0to40}s</td> : <td></td>}
                    {t.test.times._0to50 ? <td>{t.test.times._0to50}s</td> : <td></td>}
                    {t.test.times._0to60 ? <td>{t.test.times._0to60}s</td> : <td></td>}
                    {t.test.times._0to70 ? <td>{t.test.times._0to70}s</td> : <td></td>}
                    {t.test.times._0to80 ? <td>{t.test.times._0to80}s</td> : <td></td>}
                    {t.test.times._0to90 ? <td>{t.test.times._0to90}s</td> : <td></td>}
                    {t.test.times._0to100 ? <td>{t.test.times._0to100}s</td> : <td></td>}
                    {t.test.times._0to200 ? <td>{t.test.times._0to200}s</td> : <td></td>}
                    <td>{t.test.tires}</td>
                    <td>{t.test.wheelFront}</td>
                    <td>{t.test.wheelRear}</td>
                    <td>{t.test.specTime}</td>
                    <td>{t.test.test_vs_spec}</td>
                    <TDLink onClick={() => { window.location = `/${t.version.timeline.car.model}?timeline=${t.version.timeline.year}&version=${t.version.name}` }}>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</TDLink>
                </TR> : '')}

            </Body>
        </Table>
    )
}

export { Acceleration }