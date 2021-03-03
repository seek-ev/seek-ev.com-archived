import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, SearchInput, ResultsList, Loading, Bounce, Info, InfoIcon } from './styles'

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
        // Don't send request if input is empty
        if (e.value.length === 0)
            return setResults([])

        await setLoading(true)

        await axios.get(`/search/model/${e.value}`).then(res => {
            setResults(res.data)
        }).catch(err => dispatch(showSnackbar(err, 'error')))

        await setLoading(false)
    }

    return (
        <Wrapper>
            <Title>Find cars
                <Info data-text="Hey! Remember if you're not a content creator you can only add tests to cars owned by you." >
                    <InfoIcon />
                </Info>
            </Title>

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

                    {results && results.length > 0 ? '' : 'No cars found'}
                </ResultsList>}
        </Wrapper>
    )
}

export { Results }