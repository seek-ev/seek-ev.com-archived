import styled from 'styled-components/macro'

const List = styled.div`
    margin: 12px 0 0;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
        transition: all 0.3s ease 0s;
        background: rgba(34,34,34, 1);
        border-radius: 24px;
    }

    
    @media only screen and (max-width: 1250px) and (orientation: landscape) {
        max-height: 50vh;
    }
`

const NoneRequests = styled.div`
    padding: 0 0 0 4px;
`

export { List, NoneRequests }