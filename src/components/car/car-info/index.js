import React from 'react'

// Styles
import './car_info.sass'

const CarInfo = (props) => {
    return (
        <div className="car-info">
            <div>
                <div className="car-model">
                    {props.brand ? props.brand.shortName : ''} {props.model}
                </div>

                <div className="car-production-years">
                    {props.productionYears}
                </div>

                <div className="car-production-years">
                    {props.category ? props.category.name : ''}
                </div>
            </div>
        </div>
    )
}

export { CarInfo }
