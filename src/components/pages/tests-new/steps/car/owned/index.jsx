import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, OwnedList } from './styles'

// Components
import { Result } from './result'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Owned = () => {
    const [owned, setOwned] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOwned = async () => {
            await axios.get(`/users/@me/cars`).then(res => setOwned(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
        }

        fetchOwned()
    }, [dispatch])

    return (
        <Wrapper>
            <Title>Owned by you</Title>

            <OwnedList>
                {owned.map((r) => {
                    return <Result result={r} key={r.id} />
                })}
            </OwnedList>

            {owned.length === 0 ? 'You haven\'t set any car as owned yet.' : ''}
        </Wrapper>
    )
}

export { Owned }