import styled from 'styled-components/macro'

// Variables
import { colors, maxSize } from 'assets/variables'

const Wrapper = styled.div`
    left: 50%;
    z-index: 1;
    color: #fff;
    bottom: 10px;
    display: flex;
    transition: 0.5s;
    position: fixed;
    text-align: left;
    min-width: 250px;
    max-width: 480px;
    border-radius: 7px;
    visibility: hidden;
    flex-direction: row;
    transform: translate(-50%);
    padding: 14px 7px 14px 12px;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
        max-width: 90%;
        padding: 14px 12px 14px 12px;
    }

    ${props => props.show ? `
        z-index: 1;
        position: fixed;
        visibility: visible;
        animation: fadein 0.5s;
        -webkit-animation: fadein 0.5s;
    ` :
        `
        animation: fadeout 0.5s;
        -webkit-animation: fadeout 0.5s;
    `
    }

    ${props => props.type === 'success' ? `background-color: ${colors.primary};` :
        props.type === 'error' ? `background-color: ${colors.error};`
            : 'background-color: #333;'}

    @-webkit-keyframes fadein {
        0% {
            bottom: 0;
            opacity: 0;
        }

        100% {
            bottom: 10px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        0% {
            bottom: 0;
            opacity: 0;
        }

        100% {
            bottom: 10px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        0% {
            bottom: 10px;
            opacity: 1;
        }

        100% {
            bottom: 0;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        0% {
            bottom: 10px;
            opacity: 1;
        }

        100% {
            bottom: 0;
            opacity: 0;
        }
    }
`

const SnackText = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`

const SnackButton = styled.button`
    width: 60px;
    border: none;
    outline: none;
    color: #e9d520;
    font-size: 14px;
    background: none;
    font-weight: 500;
    margin: 0 0 0 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
`

export { Wrapper, SnackText, SnackButton }