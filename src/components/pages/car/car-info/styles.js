import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    max-width: 100%;
    display: flex;
    padding: 12px 24px;
    flex-direction: column;
    overflow: wrap;
    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 12px 0;
    }
`

const Model = styled.div`
    font-size: 30px;
    font-weight: 500;
`

const BrandLink = styled(Link)`
    color: #080808;
    text-decoration: none;

    :hover {
        color: ${colors.primary}
    }
`

const Concept = styled.div`
    width: auto;
    color: ${colors.primary};
    border-radius: 7px;
    font-weight: 500;
`

const ProductionYears = styled.div`
    opacity: 0.7;
    font-size: 22px;
    font-weight: 400;
`

const Category = styled.div`
    opacity: 0.7;
    font-size: 22px;
    font-weight: 400;
`

export { Wrapper, Model, BrandLink, Concept, ProductionYears, Category }