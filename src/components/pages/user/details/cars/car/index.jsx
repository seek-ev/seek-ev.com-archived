import React from 'react'

// Styles
import { DetailsLink, Wrapper, Picture, InfoWrapper, Info, Detail, Model, Category } from './styles'

const DetailsCar = ({ car }) => {
    return (
        <DetailsLink to={`/${car.model}`} >
            <Wrapper>
                <Picture>
                    <img src={car.pictures.length > 0 ? car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${car.id}`} />
                </Picture>
                <InfoWrapper>
                    <Info>
                        <div>
                            <Model>
                                {car.model}
                            </Model>
                            <Detail>
                                {car.productionYears}
                            </Detail>
                        </div>
                        {car.category ? <Category>{car.category.name}</Category> : ''}
                    </Info>
                    {car.brand ? <Detail>{car.brand.shortName}</Detail> : ''}
                </InfoWrapper>
            </Wrapper>
        </DetailsLink>
    )
}

export { DetailsCar }