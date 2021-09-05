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
import { Pagination } from 'components/basic/pagination'


const Tests = ({ id }) => {
    const [pageLoading, setPageLoading] = useState(false)
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('noise')
    const [tests, setTests] = useState([])
    const [pages, setPages] = useState(0)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            await setLoading(true)
            await axios.get(`/users/${id}/tests/${type}`).then(res => {
                setTests(res.data.tests)
                setPages(res.data.pages)
            }).catch(err => dispatch(showSnackbar(err, 'error')))
            await setLoading(false)
        }

        fetch()
    }, [id, dispatch, type])

    const changePage = async (page) => {
        await setPageLoading(true)
        await setPage(page)
        await axios.get(`/users/${id}/tests/${type}?page=${page}`).then(res => {
            setTests(res.data.tests)
            setPages(res.data.pages)
        }).catch(err => dispatch(showSnackbar(err, 'error')))
        await setPageLoading(false)
    }

    return (
        <Wrapper>
            {loading ? <Loading /> : tests.length > 0 ? <>
                <Header type={type} setType={setType} />
                <Table tests={tests} type={type} loading={pageLoading} />
                {pages > 1 ? <Pagination page={page} pages={pages} setPage={changePage} /> : ''}
            </> : <>
                <Header type={type} setType={setType} />
                <NoTests>
                    User doesn't have any tests of <span>{type}</span> type
                </NoTests></>}
        </Wrapper>
    )
}

export { Tests }