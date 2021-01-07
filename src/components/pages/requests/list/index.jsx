import React from 'react'

// Styles
import { List, NoneRequests } from './styles'

// Components
import { Request } from './request'

const RequestsList = ({ requests }) => {
    return (
        <List>
            {requests && requests.length > 0 ? requests.map((r) => <Request request={r} />) : ''}
            {requests && requests.length === 0 ?
                <NoneRequests>
                    You don't have any requests yet
                </NoneRequests>
                : ''}
        </List>
    )
}

export { RequestsList }