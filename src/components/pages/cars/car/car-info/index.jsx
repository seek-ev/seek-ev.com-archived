import React from 'react'

// Styles
import { Wrapper, Model, Concept, ProductionYears } from './styles'

const UserCarInfo = ({ brand, model, productionYears, category, concept }) => {
    return (
        <Wrapper>
            <Model>
                {brand ? brand.shortName : ''} {model}
            </Model>

            <Concept>
                {productionYears}
            </Concept>

            <ProductionYears>
                {category ? category.name : ''}
            </ProductionYears>

            {concept ? <Concept>
                {concept ? 'Concept car' : ''}
            </Concept> : ''}
        </Wrapper>
    )
}

export { UserCarInfo }