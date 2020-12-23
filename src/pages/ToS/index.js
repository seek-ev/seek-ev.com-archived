import React from 'react'

// Styles
import './tos.sass'

// Components
import { TOSNavbar } from 'components/tos/navbar'
import { TOSHeader } from 'components/tos/header'

export default class ToS extends React.Component {
    render() {
        return (
            <div className="tos-container">
                <TOSNavbar />
                <div className="tos">
                    <TOSHeader />
                    <div className="tos-note">
                        Terms under preparation
                    </div>
                </div>
            </div>
        )
    }
}
