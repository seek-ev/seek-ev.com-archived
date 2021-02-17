import React from 'react'

// Styles
import { Wrapper, Title, NoTests } from './styles'

// components
import { TestsList } from './list'
import { Button } from 'components/basic/button'


const Tests = ({ tests }) => {
    return (
        <Wrapper>
            <Title>Your tests</Title>

            {tests.length > 0 ? <TestsList tests={tests} /> : <NoTests>You haven't added any tests yet</NoTests>}

            <Button text="new" primary />
        </Wrapper>
    )
}

export { Tests }