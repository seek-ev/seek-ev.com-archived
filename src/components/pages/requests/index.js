import React from 'react'

// Styles
import './requests.sass'

const Requests = ({ requests }) => {
    return (
        <div className="requests-list">
            {requests.length > 0 ? requests.map((r) => <div className="request" key={r.id}>
                <div className="request-header">
                    <div className="request-number">Request no. <span>{r.id}</span> for <span>{r.car.brand.shortName + ' ' + r.car.model}</span></div>
                    <div className={`request-status ${r.status === 2 ? 'rejected-text' : r.status === 1 ? 'approved-text' : ''}`}>{r.status === 2 ? 'Rejected' : r.status === 1 ? 'Approved' : 'Awaiting for a review'}</div>
                </div>
                <div className="request-body">
                    <div className="request-description">{r.description}</div>
                </div>
                <div className="request-footer">
                    <div className="request-reviewed">{r.reviewedBy ? 'Reviewed by ' + r.reviewedBy.displayName : ''}</div>
                    <div className="request-created">{new Date(r.createdAt).toLocaleDateString()}</div>
                </div>
            </div>) : ''}
            <div className={`${requests.length === 0 ? 'requests-none' : 'requests-hidden'}`}>You don't have any requests yet</div>
        </div>
    )
}

export { Requests }