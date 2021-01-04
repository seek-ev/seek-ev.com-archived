import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 14px 0;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 8px 5%;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media only screen and (max-width: ${maxSize.desktop}) {
        margin: 6px 0 0;
    }

    @media only screen and (max-width: ${maxSize.large}) {
        flex-direction: column;
    }
`

const Detail = styled.div`
    font-weight: 500;
    font-size: 18px;
    margin: 0 12px 4px 0;
    a {
        color: #080808;
        font-weight: 400;
        text-decoration: none;
    
        :hover {
            color: ${colors.primary};
        }
    }
`

const DetailSpan = styled.span`
    font-weight: 400;
`

const Description = styled.div`
    margin: 2px 6px 0 0;
    max-width: 100%;
    font-size: 18px;

    @media only screen and (max-width: ${maxSize.desktop}) {
        margin: 2px 0 0;
        max-width: 100%;
    }
`

export { Wrapper, Details, Detail, DetailSpan, Description }