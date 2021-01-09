import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
    color: #000;
    height: 90px;
    min-width: 250px;
    max-width: 300px;
    text-decoration: none;
    margin: 6px 10px 6px 0;
    
    @media only screen and (max-width: 500px) {
        width: 100%;
        max-width: 100%;
        margin: 6px 0;
    }
`

const Car = styled.div`
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    box-shadow: 3px 3px 6px -6px #000;
`

const CarPicture = styled.img`
    min-width: 150px;
    width: 150px;
    height: 100%;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    object-fit: cover;

    @media only screen and (max-width: 400px) {
        border-top-right-radius: 7px;
        border-bottom-left-radius: 0px;
    }

    ${props => props.contain ? `object-fit: contain;` : ''}
`

const CarInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    padding: 10px 10px 10px 12px;
    flex-direction: COLUMN;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: 400px) {
            flex-direction: column;
    }
`

const CarInfoTop = styled.div``

const CarInfoDetail = styled.div`
    font-size: 18px;
    opacity: 0.7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${props => props.primary ? `color: ${colors.primary}` : ''}
`

const CarInfoDetailModel = styled.div`
    font-size: 18px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export { Wrapper, Car, CarPicture, CarInfo, CarInfoTop, CarInfoDetail, CarInfoDetailModel }