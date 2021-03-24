import styled from 'styled-components/macro'

// Variables
import { colors, maxSize } from 'assets/variables'

const Wrapper = styled.div`
    margin: 12px 0 0;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: #222222;
        border-radius: 24px;
    }
`

const Table = styled.table`

    th {
        color: ${colors.primary};


        @media only screen and (max-width: ${maxSize.mobile}) {
            white-space: nowrap;
        }
    }

    th,
    td {
        padding: 2px 6px;
        border: 2px ${colors.primary};
    }

    td {
        white-space: nowrap;
    }
`

const Head = styled.thead``

const TR = styled.tr`
`

const Body = styled.tbody`
    tr {
        :nth-of-type(odd) {
        background-color: #efefef;
    }

    :hover {
        color: #fff;
        background-color: ${colors.primary};
    }
  }
`

export { Wrapper, Table, Head, Body, TR }