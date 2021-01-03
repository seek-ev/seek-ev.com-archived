import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

const Connection = styled.div`
    width: 330px;
    display: flex;
    margin: 6px 0;
    padding: 6px 8px 6px 12px;
    border-radius: 7px;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    -moz-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    -webkit-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 90%;
    }

    ${props => props.revoked ? `color: #818181;` : ''}
`

const ConnectionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const HeaderWrapper = styled.div``

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${props => props.type === 'discord' ? 'color: #7289DA;' : 'color: #F96854;'}
`

const HeaderTitle = styled.div`
font-size: 18px;
    font-weight: 500;
`

const HeaderDetails = styled.div`
    margin: 4px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
        font-weight: 500;
    }
`

const HeaderDetail = styled.div``

const HeaderIcon = styled.div`
    width: 28px;
    padding: 2px 0 0;
    font-size: 28px;

    ${props => props.type === 'discord' ? 'color: #7289DA;' : 'color: #F96854;'}
`

const Footer = styled.div`
    display: flex;
    padding: 0 2px;
    justify-content: flex-end;
`

const RevokeButton = styled.div`
    color: ${colors.error};
    cursor: pointer;
    font-weight: 500;
`

const RenewButton = styled.a`
    color: ${colors.primary};
    text-decoration: none;
`

export { Connection, ConnectionRow, HeaderWrapper, Header, HeaderTitle, HeaderDetails, HeaderDetail, HeaderIcon, Footer, RevokeButton, RenewButton }