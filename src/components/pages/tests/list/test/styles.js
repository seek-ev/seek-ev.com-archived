import styled from 'styled-components/macro'

// Components
import Moment from 'react-moment'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 6px 0;
    padding: 5px 12px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 1px 3px 6px 2px rgba(0,0,0,0.07);
    -moz-box-shadow: 1px 3px 6px 2px rgba(0,0,0,0.07);
    -webkit-box-shadow: 1px 3px 6px 2px rgba(0,0,0,0.07);
`

const Car = styled.div`
     color: #525252;
`

const Text = styled.div`
    color: #000;
    display: inline-block;
`

const Type = styled.div`
    color: #525252;
`

const Date = styled(Moment)``

export { Wrapper, Car, Text, Type, Date }