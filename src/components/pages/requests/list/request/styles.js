import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    margin: 6px 0;
    font-size: 17px;
    border-radius: 7px;
    padding: 10px 14px 8px;
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
`

const Header = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 4px;
    flex-direction: row;
    justify-content: space-between;
`

const Number = styled.div`
    span {
        font-weight: 500;
    }
`

const Status = styled.div`
    font-weight: 500;

    ${props => props.rejected ? `color: ${colors.error}` : ''}

    ${props => props.approved ? `color: ${colors.primary}` : ''}
`

const Body = styled.div``

const Description = styled.div`
    max-width: 95%;
    font-weight: 500;
`

const Footer = styled.div`
    display: flex;
    margin: 4px 0 0;
    flex-direction: row;
    justify-content: space-between;
`

const Created = styled.div`
    font-weight: 500;
`

export { Wrapper, Header, Number, Status, Body, Description, Footer, Created }