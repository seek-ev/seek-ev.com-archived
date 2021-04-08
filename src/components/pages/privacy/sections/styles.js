import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    font-family: 'Comfortaa', cursive;
`

const Title = styled.p`
    font-size: 32px;
    font-weight: 500;
    margin: 46px 0 22px;
    text-transform: uppercase;
`

const Content = styled.div`
    font-size: 18px;
    font-weight: 300;
    word-wrap: nobreak;
    font-family: 'Roboto', sans-serif;

    span {
        font-weight: 500;
    }
`

const Ul = styled.ul``

const Li = styled.li``

const URL = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
`

export { Wrapper, Title, Content, Ul, Li, URL }