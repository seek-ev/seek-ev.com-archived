import React from 'react'

// Styles
import { Wrapper, Header, Number, Status, Body, Description, Footer, Created } from './styles'

export const Request = ({ request }) => {
    return (
        <Wrapper key={request.id} >
            <Header>
                <Number>Request no. <span>{request.id}</span> for <span>{request.car.brand.shortName + ' ' + request.car.model}</span></Number>

                {request.status === 2 ? <Status rejected>Rejected</Status> : request.status === 1 ? <Status approved>Approved</Status> : <Status>Awaiting for a review</Status>}
            </Header>
            <Body>
                <Description>{request.description}</Description>
            </Body>
            <Footer>
                <div>{request.reviewedBy ? 'Reviewed by ' + request.reviewedBy.displayName : ''}</div>
                <Created>{new Date(request.createdAt).toLocaleDateString()}</Created>
            </Footer>
        </Wrapper >
    )
}