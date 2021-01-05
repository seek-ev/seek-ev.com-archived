import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    padding: 0 0 2px;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const HeaderItem = styled.div`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 17px;
    margin: 0 8px 0 0;

    span {
        color: #080808;
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 12px 0;
`

const SpecItem = styled.div`
    min-width: 150px;
    max-width: 360px;
    padding: 12px 14px;
    margin: 4px 8px 6px 0;
    border-radius: 7px;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    
    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
    }

    ${props => props.show ? '' : 'display: none;'}
`

const SpecItemTitle = styled.div`
    margin: 0 0 6px;
    font-size: 22px;
    font-weight: 500;
`

const SpecItemContent = styled.div`
    display: flex;
    flex-direction: column;
`

const SpecItemContentRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
    }
`

const SpecItemContentTitle = styled.div`
    font-size: 19px;
    font-weight: 500;
`

const VersionMarginRight = styled.div`
    margin: 0 12px 0 0;
`

const VersionNoMaring = styled.div``

const SpecItemContentItem = styled.div`
    span {
      font-weight: 500;
    }
`

export {
    Wrapper,
    Title,
    Header,
    HeaderItem,
    Details,
    SpecItem,
    SpecItemTitle,
    SpecItemContent,
    SpecItemContentRow,
    SpecItemContentTitle,
    SpecItemContentItem,
    VersionMarginRight,
    VersionNoMaring
}