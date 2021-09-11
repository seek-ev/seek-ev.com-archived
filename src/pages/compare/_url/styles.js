import styled from 'styled-components'

// Variables
import { maxSize, colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Container = styled.div``

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    max-width: 1800px;
    padding: 98px 0 20px;
    flex-direction: width;
    align-items: flex-start;

    @media only screen and (max-width: ${maxSize.medium}) {
        flex-direction: column;
        padding: 32px 5% 0px;
    }

    @media only screen and (min-width: 2300px) {
        padding: 124px 20% 0px;
    }
`

const WrapperColumn = styled(Wrapper)`
    flex-direction: column;
`

const Heading = styled.h2`
    margin: 0 auto;
    font-weight: 500;

    span {
        font-weight: 600;
        color: ${colors.primary};
    }
`

const CLink = styled(Link)`
    font-weight: 400;
    margin: 12px auto;
    color: ${colors.primary};
    text-decoration: none;

    :hover {
        border-bottom: 1px solid ${colors.primary};
    }
`

export { Container,  Wrapper, WrapperColumn, Heading, CLink }