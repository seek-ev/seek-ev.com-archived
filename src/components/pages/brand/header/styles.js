import styled from 'styled-components/macro'

// Variables
import { maxSize } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Background = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 0 12px 12px;
    border-radius: 0 0 12px 12px;
    
    @media only screen and (max-width: ${maxSize.medium}) {
        width: 90%;
    }
    
    @media only screen and (max-width: 400px) {
        width: 100%;
    }

    ${props => props.back ? `
        min-height: 350px;
        background-image: url('${props.back ? props.back.url : ''}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        
        @media only screen and (max-width: ${maxSize.large}) {
            min-height: 300px;
        }
 
    ` : 'height: auto;'}
`

const HeaderRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export { Wrapper, Background, HeaderRow }