import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    font-weight: 500;
`

const Title = styled.div`
    font-size: 24px;
`

const Year = styled.div`
    font-size: 20px;
    color: ${colors.primary};
`

const Concept = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: ${colors.primary};
    
    ${props => props.display ? '' : `
        display: none;
    `}
`

export { Wrapper, Title, Year, Concept }