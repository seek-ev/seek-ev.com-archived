import styled from 'styled-components/macro'

// Variables
import { minSize, maxSize } from 'assets/variables'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5% 12vh;
`

const HomeLink = styled(Link)``

const Logo = styled.img`
    width: 115px;

    @media only screen and (max-width: ${maxSize.desktop}) {
        width: 90px;
    }
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 24px;
    text-align: center;
    
    @media only screen and (min-width: ${minSize.desktop}){
        margin: 0 0 12px; 
    }
`

const TitleP = styled.p`
    font-weight: 500;
    margin: 8px 0 0px;
`

export { Wrapper, HomeLink, Logo, Title, TitleP }