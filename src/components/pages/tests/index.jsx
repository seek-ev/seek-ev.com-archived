import React from 'react'
import { Link } from 'react-router-dom'

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

            <Link to="/tests/new">
                <Button text="new" primary />
            </Link>
        </Wrapper>
    )
}

export { Tests }