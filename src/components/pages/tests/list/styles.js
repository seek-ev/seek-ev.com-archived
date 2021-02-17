import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
`

const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Page = styled.div`
    padding: 6px 8px;
    font-weight: 500;
    border-radius: 6px;
    margin: 4px 8px 0 0;
    box-shadow: 1px 2px 6px 3px rgba(0,0,0,0.1);
    -moz-box-shadow: 1px 2px 6px 3px rgba(0,0,0,0.1);
    -webkit-box-shadow: 1px 2px 6px 3px rgba(0,0,0,0.1);

    ${props => props.chosen ? `
        color: #fff;
        background-color: ${colors.primary};
    ` : ''}
`

export { Wrapper, Pagination, Page }