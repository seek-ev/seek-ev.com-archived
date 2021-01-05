import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 500px;
    height: 300px;

    @media only screen and (max-width: 1400px) {
        width: 400px;
        height: 250px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
    }
`

const Picture = styled.div`
      width: 500px;
    height: 300px;
    position: relative;
    border-radius: 7px;
    box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    -moz-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    -webkit-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
    
    @media only screen and (max-width: 1400px) {
        width: 400px;
        height: 250px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
        height: 100%;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 7px;
    }

    ${props => props.default ? `
        border-radius: 7px;
        box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        -moz-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);
        -webkit-box-shadow: 1px 2px 4px 2px rgba(0,0,0, 0.12);

        img {
            border-radius: 7px;
            object-fit: contain;
        }
    ` : ''}
`

const Arrow = styled.div`
    position: absolute;
    top: 42%;
    color: #fff;
    font-size: 48px;

    ${props => props.left ? `
        left: 0px;
        margin: 0 0 0 -4px;
    ` : ''}

    ${props => props.right ? `
        right: 0px;
        margin: 0 -4px 0 0;
    ` : ''}

    ${props => props.disabled ? 'display: none;' : ''}
`

export { Wrapper, Picture, Arrow }