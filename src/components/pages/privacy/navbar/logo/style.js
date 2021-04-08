import styled from 'styled-components/macro'

// Components
import { Link } from 'react-router-dom'

const Logo = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`

const Image = styled.img`
    width: 52px;
    height: 52px;
`

const Brand = styled.div`
    color: #000;
    font-weight: 600;
    font-size: 26px;
    margin: 0 0 0 4px;
    font-family: 'Exo', sans-serif;
`

export { Logo, Image, Brand }