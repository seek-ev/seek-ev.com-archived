import styled from 'styled-components/macro'

// Variables
import { colors } from 'assets/variables'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Timeline = styled.div`
    width: 100%;
    margin: 4px 4px 0px 0px;
`

const TimelineButton = styled.div`
    width: 100%;
    display: flex;
    margin: 8px 0 -8px;
    justify-content: flex-end;
`

const TimelineButtonMr = styled.div`
    margin: 0px 6px 0px;
`

const TimelineError = styled.div`
    color: ${colors.error};
    font-size: 14px;
    font-weight: 500;
    padding: 2px 0 0 6px;
`

const ChooseError = styled.div`
    color: ${colors.error};
    font-size: 22px;
    font-weight: 500;
    margin: 2px 4px 6px 0;
`

const Loading = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 0 6px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 4px solid ${colors.primary};
        border-radius: 50%;
        animation: chosen-loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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

    @keyframes chosen-loading-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export {
    Wrapper,
    Timeline,
    TimelineButton,
    TimelineButtonMr,
    TimelineError,
    ChooseError,
    Loading
}