import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

// components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 1;
    top: 0px;
    padding: 14px 0 0;
    flex-direction: row;
    margin: 0 0 130px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: ${maxSize.medium}) and (orientation: portrait) {
        padding: 6px 0 0;
    }

    @media only screen and (max-width: 400px) {
        padding: 12px 0 0;
    }
`

const LandingButton = styled(Link)`
    color: #000;
    font-size: 19px;
    position: relative;
    text-decoration: none;
    font-family: 'Varela Round', sans-serif;

    :after{
        content: '';
        position: absolute;
        width: 0; 
        height: 2px;
        display: block;
        margin-top: 1px;
        right: 0;
        background: #000;
        transition: width .2s ease;
        -webkit-transition: width .2s ease;
    }
    
    :hover:after{
        width: 100%;
        left: 0;
        background: #000;
    }

    @media only screen and (max-width: ${maxSize.desktop}) {
       font-size: 17px;
    }
`



export { Wrapper, LandingButton }