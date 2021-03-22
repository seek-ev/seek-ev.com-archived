import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Loading } from '../../styles'
import { Wrapper, List, NotFound } from './styles'

// Components
import { Car } from './car'

// Actions
import { showSnackbar } from 'actions/snackbar'

const Cars = ({ id }) => {
    const [loading, setLoading] = useState(true)
    const [cars, setCars] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            await setLoading(true)
            await axios.get(`/users/${id}/cars`).then(res => setCars(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        fetch()
    }, [id, dispatch])

    return (
        <Wrapper>
            {loading ? <Loading /> : cars.length > 0 ? <List>{cars.map((c) => <Car car={c} key={c.id} />)}</List>
                : <NotFound>User doesn't own any cars</NotFound>}
        </Wrapper>
    )
}

export { Cars }