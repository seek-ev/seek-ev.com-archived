import styled, { keyframes } from 'styled-components/macro'

// Variables
import { colors, maxSize } from 'assets/variables'

const Wrapper = styled.div`
    display: flex;
    margin: 12px 0 0;
    overflow-x: scroll;
    justify-content: center;

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

const loadingRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    width: 60px;
    height: 60px;
    margin: 0 0 6px;
    position: relative;
    display: inline-block;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 48px;
        height: 48px;
        margin: 8px;
        border: 4px solid ${colors.primary};
        border-radius: 50%;
        animation: ${loadingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${colors.primary} transparent transparent transparent;
        &:nth-child(1) {
            animation-delay: -0.45s;
        }
        &:nth-child(2) {
            animation-delay: -0.3s;
        }
        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`

export { Wrapper, Table, Head, Body, TR, TDLink, Loading }