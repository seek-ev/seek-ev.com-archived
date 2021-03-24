import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Loading } from '../../styles'
import { Wrapper, NoTests } from './styles'

// Actions
import { showSnackbar } from 'actions/snackbar'

// Componnents
import { Table } from './table'
import { Header } from './header'


const Tests = ({ id }) => {
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('noise')
    const [tests, setTests] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            await setLoading(true)
            await axios.get(`/users/${id}/tests/${type}`).then(res => setTests(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        fetch()
    }, [id, dispatch, type])

    return (
        <Wrapper>
            {loading ? <Loading /> : tests.length > 0 ? <>
                <Header type={type} setType={setType} />
                <Table tests={tests} type={type} />
            </> : <NoTests>
                User doesn't have any tests
                </NoTests>}
        </Wrapper>
    )
}

export { Tests }