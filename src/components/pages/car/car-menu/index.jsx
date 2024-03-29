import React from 'react'

// Styles
import { Wrapper, Item, ItemColumn, Title, Description, Icon } from './styles'

// Icons
import { RiTestTubeFill } from 'react-icons/ri'
import { MdDescription, MdForum } from 'react-icons/md'

const CarMenu = ({ item, changeItem }) => {
    return (
        <Wrapper>
            <Item chosen={item === 'details'} disabled>
                <ItemColumn>
                    <Title>Details <span>Coming Soon</span></Title>
                    <Description>
                        Car versions with details like range
                    </Description>
                </ItemColumn>
                <Icon>
                    <MdDescription />
                </Icon>
            </Item>

            <Item chosen={item === 'tests'} onClick={() => changeItem('tests')}>
                <ItemColumn>
                    <Title>Tests</Title>
                    <Description>
                        Tests added by users
                    </Description>
                </ItemColumn>
                <Icon>
                    <RiTestTubeFill />
                </Icon>
            </Item>

            <Item chosen={item === 'reviews'} disabled>
                <ItemColumn>
                    <Title>Reviews <span>Coming Soon</span></Title>
                    <Description>
                        Reviews left by users
                    </Description>
                </ItemColumn>
                <Icon>
                    <MdForum />
                </Icon>
            </Item>
        </Wrapper>
    )
}

export { CarMenu }