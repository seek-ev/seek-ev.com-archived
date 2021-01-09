import styled from 'styled-components/macro'

// Components
import { Link } from 'react-router-dom'

// Variables
import { maxSize, colors } from 'assets/variables'

const DetailsLink = styled(Link)`
    color: #080808;
    text-decoration: none;
`

const Wrapper = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    margin: 8px 0;
    flex-direction: row;
    border-radius: 7px;
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.07);

    :hover {
        box-shadow: 0px 1px 6px 2px rgba(0,0,0, 0.12);
        -moz-box-shadow: 0px 1px 6px 2px rgba(0,0,0, 0.12);
        -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0, 0.12);
    }
    
    @media only screen and (max-width: ${maxSize.medium}) { 
        height: 110px;
        margin: 6px 0;
    }

    @media only screen and (max-width: 400px) {
        height: auto;
        flex-direction: column;
    }
`

const Picture = styled.div`
    min-width: 150px;
    width: 150px;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        object-fit: cover;
        
        @media only screen and (max-width: 400px) {
            border-top-right-radius: 7px;
            border-bottom-left-radius: 0px;
        }
    }
       
    @media only screen and (max-width: ${maxSize.medium}) {
        width: 130px;
    }

    @media only screen and (max-width: 400px) {
        width: 100%;
        height: 150px;
    }
`

const InfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding: 10px 10px 10px 16px;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: 400px) {
        flex-direction: column
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Detail = styled.div`
    font-size: 18px;
    opacity: 0.7;
`

const Model = styled.div`
    font-size: 18px;
    font-weight: 500;
`

const Category = styled.div`
    color: ${colors.primary}
`

export { DetailsLink, Wrapper, Picture, InfoWrapper, Info, Detail, Model, Category }