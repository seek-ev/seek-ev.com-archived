import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    border: 2px dashed grey;

    @media only screen and (max-width: 1400px) {
        width: 400px;
        height: 250px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
    }

    ${props => props.pic ? 'border: 1px solid #000;' : ''}
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
`

const NewButton = styled.div`
    font-size: 38px;
    text-align: center;
    z-index: 10;
    position: absolute;

    input {
        display: none;
    }

    ${props => props.pic ? 'color: #fff;' : ''}
`

export { Wrapper, Image, NewButton }