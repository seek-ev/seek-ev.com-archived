import React from 'react'

// Styles
import { DetailsLink, Wrapper, Picture, InfoWrapper, Info, InfoDetails, Detail, Model, Category } from './styles'

const Car = ({ car }) => {
    return (
        <DetailsLink to={`/${car.version.timeline.car.model}?timeline=${car.version.timeline.year}&version=${car.version.name}`} >
            <Wrapper>
                <Picture>
                    <img src={car.version.timeline.car.pictures.length > 0 ? car.version.timeline.car.pictures[0].url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={`car-${car.id}`} />
                </Picture>
                <InfoWrapper>
                    <Info>
                        <InfoDetails>
                            <Model>
                                {car.version.timeline.car.model} {car.version.name}
                            </Model>
                            <Detail>
                                {car.version.timeline.year}
                            </Detail>
                        </InfoDetails>
                        {car.version.timeline.car.category ? <Category>{car.version.timeline.car.category.name}</Category> : ''}
                    </Info>
                    {car.version.timeline.car.brand ? <Detail>{car.version.timeline.car.brand.shortName}</Detail> : ''}
                </InfoWrapper>
            </Wrapper>
        </DetailsLink>
    )
}

export { Car }