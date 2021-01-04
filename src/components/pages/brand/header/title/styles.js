import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    height: auto;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${props => props.founded ? '' : `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 500;

    ${props => props.back ? 'color: #fff;' : ''}
`

const Founded = styled.div`
    padding: 0 4px 0 0;
    font-size: 18px;
    color: ${colors.primary};
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 1;
`

export { Wrapper, Title, Founded }