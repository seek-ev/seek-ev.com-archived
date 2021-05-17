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
    width: 100%;
    min-width: 100%;

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
        text-align: center;
        white-space: nowrap;
    }

    a {
        color: #080808;
        text-decoration: none;
    }
`

const Head = styled.thead``

const TR = styled.tr``

const Body = styled.tbody`
    tr {
        :nth-of-type(odd) {
        background-color: #efefef;
    }

    :hover {
        color: #fff;
        background-color: ${colors.primary};

        a {
            color: #fff;
        }
    }
  }
`

const TDLink = styled.td`
    cursor: pointer;
`

export { Wrapper, Table, Head, Body, TR, TDLink }