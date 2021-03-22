import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    margin: 12px 0 0;
`

const Table = styled.table`

    th {
        color: ${colors.primary};
    }

    th,
    td {
        padding: 2px 6px;
        border: 2px ${colors.primary};
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