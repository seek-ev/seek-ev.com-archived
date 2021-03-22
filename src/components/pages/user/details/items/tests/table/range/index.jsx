import React from 'react'

// Styles
import { Table, Head, Body, TR } from '../styles'

const Range = ({ tests }) => {
    return (
        <Table>
            <Head>
                <TR>
                    <th>Kilometers</th>
                    <th>Miles</th>
                    <th>Tires</th>
                    <th>Season</th>
                    <th>Surface</th>
                    <th>Wh Per Km</th>
                    <th>Wheel front</th>
                    <th>Wheel rear</th>
                    <th>Battery capacity</th>
                    <th>Range with 75%</th>
                    <th colSpan="2">Charging to 75%</th>
                    <th>
                        Car
                    </th>
                </TR>
                <TR>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Time</th>
                    <th>Kmph</th>
                    <th></th>
                </TR>
            </Head>
            <Body>
                {tests.map(t => t.test.chargingTo75Percent ? <TR key={t.id}>
                    <td>{t.test.km}</td>
                    <td>{t.test.mi}</td>
                    <td>{t.test.tires}</td>
                    <td>{t.test.season}</td>
                    <td>{t.test.surface}</td>
                    <td>{t.test.whPerKm}</td>
                    <td>{t.test.wheelFront}</td>
                    <td>{t.test.wheelRear}</td>
                    <td>{t.test.batteryCapacity}</td>
                    <td>{t.test.rangeWith75Percent}</td>
                    <td>{t.test.chargingTo75Percent.time}</td>
                    <td>{t.test.chargingTo75Percent.kmPerHour}</td>
                    <td>{t.version.timeline.year} {t.version.timeline.car.model} {t.version.name}</td>
                </TR> : '')}
            </Body>
        </Table>
    )
}

export { Range }