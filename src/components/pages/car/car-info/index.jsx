import React from 'react'

// Styles
import { Wrapper, Model, BrandLink, Concept, ProductionYears, Category } from './styles'

const CarInfo = ({ brand, model, productionYears, category, concept }) => {
    return (
        <Wrapper>
            <Model>
                <BrandLink to={`/b/${brand.shortName}`}>{brand ? brand.shortName : ''}</BrandLink> {model}
            </Model>

            <ProductionYears>
                {productionYears}
            </ProductionYears>

            <Category>
                {category ? category.name : ''}
            </Category>

            {concept ? <Concept>
                {concept ? 'Concept car' : ''}
            </Concept> : ''}
        </Wrapper>
    )
}

export { CarInfo }
