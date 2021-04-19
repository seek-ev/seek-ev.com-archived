import styled from 'styled-components/macro'

// Variables
import {colors }from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const Construction = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    font-size: 24px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const HomeLink = styled(Link)`
    font-size: 22px;
    margin: 4px 0 0;
    text-decoration: none;
    color: ${colors.primary};
`

export { Wrapper, Construction, HomeLink }