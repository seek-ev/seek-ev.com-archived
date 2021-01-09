import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { BrandHeader } from './header'
import { BrandCars } from './cars'

const BrandContainer = ({ brand }) => {
    return (
        <Wrapper background={brand.background}>
            <BrandHeader
                back={brand.background}
                avatar={brand.avatar}
                name={brand.name}
                description={brand.description}
                founded={brand.founded}
                website={brand.website}
                areaServed={brand.areaServed}
                headquarters={brand.headquarters} />

            {brand.cars && brand.cars.length > 0 ? <BrandCars cars={brand.cars} /> : ''}
        </Wrapper>
    )
}

export { BrandContainer }