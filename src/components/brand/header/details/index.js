import React from 'react'

// Styles
import './details.sass'

const BrandDetails = (props) => {
    return (
        <div className="brand-details">
            <div className="brand-details-description">
                {props.description ? props.description : 'We don\'t have any details about this brand.'}
            </div>
            <div className="brand-details-footer">
                <div className={`${props.website ? 'brand-details-footer-item' : 'brand-hidden'}`}>
                    Website: <a href={props.website}>{props.website ? props.website.replace('https://', '').replace('http://', '').replace('www.', '') : ''}</a>
                </div>

                <div className={`${props.areaServed ? 'brand-details-footer-item' : 'brand-hidden'}`}>
                    Area served: <span>{props.areaServed}</span>
                </div>

                <div className={`${props.headquarters ? 'brand-details-footer-item' : 'brand-hidden'}`}>
                    Headquarters: <span>{props.headquarters}</span>
                </div>
            </div>
        </div>
    )
}

export { BrandDetails }