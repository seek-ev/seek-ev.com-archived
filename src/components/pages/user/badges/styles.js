import styled from 'styled-components/macro'

// Variables
import { } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 24px;
    justify-content: flex-start;
    align-items: center;
`

const Tooltip = styled.span`
    visibility: hidden;
    width: auto;
    background-color: #222324;
    white-space: nowrap;
    color: #fff;
    text-align: center;
    padding: 6px 16px;
    border-radius: 6px;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    z-index: 1;
    bottom: 110%;
    margin-left: -50px;
    transition: opacity 0.3s;
`

const Badge = styled.div`
    position: relative;
    display: block;
    width: 28px;
    margin: 0 1px;

    :hover ${Tooltip} {
        visibility: visible
    }

    img {
        width: 28px;
        height: 28px;
    }

    @media only screen and (max-width: $max-medium) {
        margin: 0 2px;
        img {
            height: 32px;
            width: 32px;
        }
    }

    @media only screen and (max-width: 400px) {
        margin: 0 1px;
        img {
            height: 28px;
            width: 28px;
        }
    }
`

export { Wrapper, Badge, Tooltip }