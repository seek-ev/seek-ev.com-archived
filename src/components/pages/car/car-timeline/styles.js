import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    padding: 18px 0;
    flex-direction: column;
`

const HeaderWrapper = styled.div``

const Header = styled.div``

const Title = styled.div`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 15px;
    margin: 0 0 2px;
`

const HeaderSelect = styled.div`
    max-width: 150px;
`

const NoneTimeline = styled.div`
    width: 100%;
    padding: 4px 0;
    font-size: 22px;
    text-align: center;
`

export { Wrapper, HeaderWrapper, Header, Title, HeaderSelect, NoneTimeline }