import styled from 'styled-components/macro'

const Wrapper = styled.div`
    width: 84px;
    height: 84px;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    @media only screen and (max-width: 400px) {
        width: 64px;
        height: 64px;
    }
`

export { Wrapper }

