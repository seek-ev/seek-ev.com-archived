import React from 'react'

// Styles
import { Wrapper, Header, HeaderInfo, Details } from './styles'

// Components
import { CarInfo } from './car-info'
import { CarMenu } from './car-menu'
import { CarPictures } from './car-pictures'
import { CarTimeline } from './car-timeline'

const CarContainer = ({ car, timeline, version }) => {
    return (
        <Wrapper>
            <Header>
                <HeaderInfo>
                    <CarPictures pictures={car.pictures} />
                    <CarInfo model={car.model} concept={car.concept} productionYears={car.productionYears} category={car.category} brand={car.brand} createdBy={car.admin ? car.admin : car.user} />
                </HeaderInfo>
                <CarMenu versions={car.versions} />
            </Header>
            <Details>
                <CarTimeline timeline={car.timeline} display={timeline} version={version} />
            </Details>
        </Wrapper>
    )
}

export { CarContainer }