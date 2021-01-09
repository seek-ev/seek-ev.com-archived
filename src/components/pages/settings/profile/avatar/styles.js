import styled from 'styled-components/macro'

const AvatarImg = styled.img`
    display: block;
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
    transition: .5s ease;
    backface-visibility: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`

const AvatarIcon = styled.div`
    left: 50%;
    bottom: 0;
    opacity: 0;
    color: #080808;
    font-size: 24px;
    text-align: center;
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`

const Avatar = styled.div`
    position: relative;

    input {
        display: none;
    }

    :hover ${AvatarImg} {
        opacity: 0.4;
    }

    :hover ${AvatarIcon} {
        opacity: 1;
    }
`

export { Avatar, AvatarImg, AvatarIcon }