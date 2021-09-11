import styled from 'styled-components/macro'

// Variables
import { maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const Car = styled.div`
    padding: 94px 5% 24px;

    @media only screen and (max-width: ${maxSize.medium}) {
        padding: 72px 5% 24px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 94px 25% 24px;
    }
`

const CarNotFound = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 6px;
`

const CarNotFoundLink = styled.div`
    margin: 2px 0;
`

const CarNotFoundButton = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    border-bottom: 2px solid #fff;
    text-decoration: none;

    :hover {
        border-bottom: 2px solid ${colors.primary};
    }
`

const CarNotFoundTitle = styled.div`
    font-size: 38px;
    margin: 0 0 12px;
`

export { Wrapper, Car, CarNotFound, CarNotFoundLink, CarNotFoundButton, CarNotFoundTitle }