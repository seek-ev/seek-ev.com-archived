import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    margin: 0px 20% 24px;
    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: ${maxSize.desktop}) {
        margin: 0px 12% 24px;
    }

    @media only screen and (max-width: ${maxSize.medium}) {
        align-items: center;
        margin: 0px 0 24px;
    }

    @media only screen and (min-width: 2300px) {
        margin: 0px 30% 24px;
    }

    ${props => props.background ? `
        margin: 60px 20% 24px;
        
        @media only screen and (max-width: ${maxSize.desktop}) {
            margin: 60px 12% 24px;
        }

        @media only screen and (max-width: ${maxSize.medium}) {
            align-items: center;
            margin: 60px 0 24px;
        }

        @media only screen and (min-width: 2300px) {
            margin: 60px 30% 24px;
        }
    ` :
        `
        margin: 126px 20% 24px;

        @media only screen and (max-width: ${maxSize.desktop}) {
            margin: 126px 12% 24px;
        }

        @media only screen and (max-width: ${maxSize.medium}) {
            align-items: center;
            margin: 78px 0 24px;
        }

        @media only screen and (min-width: 2300px) {
            margin: 126px 30% 24px;
        }
    `}
`

export { Wrapper }