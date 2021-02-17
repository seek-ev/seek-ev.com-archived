import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, SearchInput, ResultsList } from './styles'

// Components
import { Result } from './result'
import { Input } from 'components/basic/input'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Results = () => {
    const [results, setResults] = useState([])
    const dispatch = useDispatch()

    const searchCar = async (e) => {
        await axios.get(`/search/model/${e.value}`).then(res => setResults(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
    }

    return (
        <Wrapper>
            <Title>Find other cars</Title>

            <SearchInput>
                <Input placeholder="Search for a car" onChange={searchCar} />
            </SearchInput>

            <ResultsList>
                {results.map((r) => {
                    return <Result result={r} key={r.id} />
                })}
            </ResultsList>

            {results.length === 0 ? 'No cars found' : ''}
        </Wrapper>
    )
}

export { Results }