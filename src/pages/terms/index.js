import React from 'react'

// Styles
import './tos.sass'

// Components
import { TermsNavbar } from 'components/pages/terms/navbar'
import { TermsHeader } from 'components/pages/terms/header'

export default class ToS extends React.Component {
    render() {
        return (
            <div className="tos-container">
                <TermsNavbar />
                <div className="tos">
                    <TermsHeader />
                    <div className="tos-note">
                        Terms under preparation
                    </div>
                </div>
            </div>
        )
    }
}
