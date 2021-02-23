import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, SearchInput, ResultsList, Loading, Bounce } from './styles'

// Components
import { Result } from './result'
import { Input } from 'components/basic/input'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Results = ({ next }) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const searchCar = async (e) => {
        await setLoading(true)
        await axios.get(`/search/model/${e.value}`).then(res => setResults(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
        await setLoading(false)
    }

    return (
        <Wrapper>
            <Title>Find cars</Title>

            <SearchInput>
                <Input placeholder="Search for a car" onChange={searchCar} />
            </SearchInput>

            {loading ? <Loading>
                <Bounce one />
                <Bounce two />
                <Bounce />
            </Loading> : <ResultsList>
                    {results.map((r) => {
                        return <Result result={r} key={r.id} next={next} />
                    })}

                    {results.length === 0 ? 'No cars found' : ''}
                </ResultsList>}
        </Wrapper>
    )
}

export { Results }