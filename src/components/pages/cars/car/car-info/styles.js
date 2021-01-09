import styled from 'styled-components/macro'

// Assets
import { maxSize, colors } from 'assets/variables'

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

export { Wrapper, Model, Concept, ProductionYears }