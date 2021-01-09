import React from 'react'

// Styles
import { Wrapper, Car, CarPicture, CarInfo, CarInfoTop, CarInfoDetail, CarInfoDetailModel } from './styles'

const BrandCar = ({ car }) => {
    return (
        <Wrapper to={`/${car.model}`}>
            <Car>
                <CarPicture contain={car.pictures.length === 0} src={car.pictures.length > 0 ? car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${car.id}`} />
                <CarInfo>
                    <CarInfoTop>
                        <CarInfoDetailModel>
                            {car.model}
                        </CarInfoDetailModel>
                        <CarInfoDetail>
                            {car.productionYears}
                        </CarInfoDetail>
                    </CarInfoTop>
                    <CarInfoDetail primary={true}>
                        {car.category ? car.category.name : ''}
                    </CarInfoDetail>
                </CarInfo>
            </Car>
        </Wrapper>
    )
}

export { BrandCar }