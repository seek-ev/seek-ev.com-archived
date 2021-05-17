import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 6px 0px;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
`

const Versions = styled.div`
    width: 100%;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    padding: 6px 0 4px 4px;
`

const VersionSelect = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const VersionButton = styled.div`
    width: auto;
    margin: 4px 6px;
    cursor: pointer;
    overflow: hidden;
    font-weight: 500;
    padding: 6px 16px;
    border-radius: 7px;
    background-color: #fff;
    text-overflow: ellipsis;
    transition: all 0.3s ease 0s;
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);

    ${props => props.chosen ? `
    color: #fff;
    background-color: ${colors.primary};
    ` : ''}
`

const Version = styled.div`
    padding: 16px 2px 8px;
`

const VersionTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
`

const VersionDescription = styled.div`
    font-size: 18px;
`

const VersionDetails = styled.div``

const None = styled.div`
    width: 100%;
    padding: 4px 0;
    font-size: 22px;
    text-align: center;
`

export { Wrapper, Versions, Title, VersionSelect, VersionButton, Version, VersionTitle, VersionDescription, VersionDetails, None }