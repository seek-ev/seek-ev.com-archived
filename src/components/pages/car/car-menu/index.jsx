import React, { useState } from 'react'

// Styles
import { Wrapper, Item, ItemColumn, Title, Description, Icon } from './styles'

// Icons
import { MdLibraryBooks, MdPeople, MdForum } from 'react-icons/md'

const CarMenu = ({ versions }) => {
    const [item, setItem] = useState('timeline')

    return (
        <Wrapper>
            <Item chosen={item === 'timeline'} onClick={() => setItem('versions')}>
                <ItemColumn>
                    <Title>Timeline</Title>
                    <Description>
                        Timeline of the car that includes its versions
                    </Description>
                </ItemColumn>
                <Icon>
                    <MdLibraryBooks />
                </Icon>
            </Item>

            <Item chosen={item === 'tests'} disabled>
                <ItemColumn>
                    <Title>Tests <span>Coming Soon</span></Title>
                    <Description>
                        Tests added by users
                    </Description>
                </ItemColumn>
                <Icon>
                    <MdPeople />
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