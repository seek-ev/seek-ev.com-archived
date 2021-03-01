import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, OwnedList, Loading, Bounce } from './styles'

// Components
import { Result } from './result'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Owned = ({ next }) => {
    const [loading, setLoading] = useState(true)
    const [owned, setOwned] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOwned = async () => {
            await setLoading(true)
            await axios.get(`/users/@me/cars`).then(res => setOwned(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        fetchOwned()
    }, [dispatch])

    const nextStep = (car) => {
        next(car)
    }

    return (
        <Wrapper>
            <Title>Owned by you</Title>

            <OwnedList>
                {owned.map((r) => {
                    return <Result result={r} key={r.id} nextStep={nextStep} />
                })}
            </OwnedList>

            {loading ? <Loading>
                <Bounce one />
                <Bounce two />
                <Bounce />
            </Loading> : ''}

            {owned.length === 0 && !loading ? 'You haven\'t set any car as owned yet.' : ''}
        </Wrapper>
    )
}

export { Owned }