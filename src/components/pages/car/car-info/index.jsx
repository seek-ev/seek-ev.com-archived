import React from 'react'

// Styles
import { Wrapper, Model, Concept, ProductionYears, Category } from './styles'

const CarInfo = ({ brand, model, productionYears, category, concept }) => {
    return (
        <Wrapper>
            <Model>
                {brand ? brand.shortName : ''} {model}
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
