import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div``

const Title = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 12px 0px 8px;
`

const Card = styled.div`
    width: 250px;
    border-radius: 8px;
    margin: 0px 14px 8px 0;
    box-shadow: 1px 2px 6px 3px rgba(0,0,0,0.1);
    -moz-box-shadow: 1px 2px 6px 3px rgba(0,0,0,0.1);
    -webkit-box-shadow: 1px 2px 6px 3px rgba(0,0,0,0.1);

    @media only screen and (max-width: ${maxSize.medium}) {
        width: 100%;
    }
`

const Background = styled.img`
    width: 100%;
    height: 90px;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;

    @media only screen and (max-width: ${maxSize.medium}) {
        height: 100px;
    }
`

const CarTitle = styled.div`
    padding: 2px 8px 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export { Wrapper, Title, Card, Background, CarTitle }