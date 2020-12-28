import React from 'react'

// Styles
import './details.sass'

const BrandDetails = ({ description, website, areaServed, headquarters }) => {
    return (
        <div className="brand-details">
            <div className={`${description ? 'brand-details-description' : ''}`}>
                {description}
            </div>
            <div className="brand-details-footer">
                <div className={`${website ? 'brand-details-footer-item' : 'brand-hidden'}`}>
                    Website: <a href={!(/^(http|https):\/\//.test(website)) ? `http://${website}` : website}>{website ? website.replace(/^(http|https):\/\//, '').replace('www.', '') : ''}</a>
                </div>

                <div className={`${areaServed ? 'brand-details-footer-item' : 'brand-hidden'}`}>
                    Area served: <span>{areaServed}</span>
                </div>

                <div className={`${headquarters ? 'brand-details-footer-item' : 'brand-hidden'}`}>
                    Headquarters: <span>{headquarters}</span>
                </div>
            </div>
        </div>
    )
}

export { BrandDetails }