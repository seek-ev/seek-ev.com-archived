import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    margin: 4px 0;
    padding: 0 6px 0 0;
    max-height: 60vh;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
        transition: all 0.3s ease 0s;
        background: rgba(34,34,34, 1);
        border-radius: 24px;
    }

    @media only screen and (max-width: ${maxSize.large}) and (orientation: landscape) {
        max-height: 40vh
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        max-height: 65vh
    }

    @media only screen and (max-width: 400px) {
        max-height: 55vh
    }
`

const Cars = styled.div``

const NotFound = styled.div`
    width: 100%;
    text-align: center;
    margin: 4px 0 0;
    font-size: 17px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    @media only screen and (max-width: ${maxSize.medium}) {
        margin: 8px 0;
    }
`

export { Wrapper, Cars, NotFound }