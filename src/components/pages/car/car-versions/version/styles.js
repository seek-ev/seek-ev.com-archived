import styled from 'styled-components/macro'


const Wrapper = styled.div`
    padding: 16px 2px;
    font-family: 'Roboto', sans-serif;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
`

const Description = styled.div`
    font-size: 18px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    padding: 8px 0;
    overflow: hidden;
    flex-direction: row;
`

export { Wrapper, Title, Description, Details }