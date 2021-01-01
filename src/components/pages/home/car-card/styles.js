import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables.js'

const Wrapper = styled.div`
    min-height: 200px;
    max-height: 210px;
    width: 18%;
    margin: 8px 1%;
    background: #fff;
    border-radius: 7px;
    color: #080808;
    text-decoration: none;
    transition: all .5s ease;
    box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    -moz-box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);
    -webkit-box-shadow: 0 6px 14px 0px rgba(0,0,0,.08);

    @media only screen and (max-width: 1550px) {
        width: 30%;
        margin: 8px 1.5%;
    }

    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 30%;
        margin: 8px 1.5%;
    }

    @media only screen and (max-width: ${maxSize.large}) and (orientation: landscape) {
        width: 44%;
        margin: 8px 3%;
    }

    @media only screen and (max-width: ${maxSize.small}) {
        width: 95%;
    }

    @media only screen and (max-width: 300px) {
        width: 80%;
        margin: 0 1% 0;
    }

    :hover {
        color: ${colors.primary};
        box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
        -moz-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
        -webkit-box-shadow: 0 8px 24px 0px rgba(0,0,0, .14);
    }
`

const Image = styled.div`
    width: 100%;
    height: 170px;
    display: flex;
    max-height: 170px;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 7px 7px 0px 0px;
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    font-weight: 500;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-basis: auto;
    padding: 10px 8px 8px;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 -2px 6px 0px rgba(0,0,0, .04);
    -moz-box-shadow: 0 -2px 6px 0px rgba(0,0,0, .04);
    -webkit-box-shadow: 0 -2px 6px 0px rgba(0,0,0, .04);
`

const Title = styled.div`
    width: 50%;
    white-space: nowrap;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Subtitle = styled.div`
    min-width: 0;
    width: 50%;
    max-height: 20px;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export { Wrapper, Image, Details, Title, Subtitle }