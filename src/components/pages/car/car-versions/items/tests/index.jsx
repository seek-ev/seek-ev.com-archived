import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Loading, NotFound } from './styles'

// Components
import { Header } from './header'
import { VersionTable } from './table'
import { Pagination } from 'components/basic/pagination'

// Actions
import { showSnackbar } from 'actions/snackbar'

const VersionTests = ({ item, version }) => {
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

            await axios.get(`/tests/version/${version.id}/${type}`).then(res => {
                setTests(res.data.tests)
                setPages(res.data.pages)
            }).catch(err => {
                return dispatch(showSnackbar(err, 'error'))
            })

            await setLoading(false)
        }

        fetch()
    }, [version, dispatch, type])

    const changePage = async (page) => {
        await setPageLoading(true)
        await setPage(page)
        await axios.get(`/tests/version/${version.id}/${type}?page=${page}`).then(res => {
            setTests(res.data.tests)
            setPages(res.data.pages)
        }).catch(err => {
            return dispatch(showSnackbar(err, 'error'))
        })
        await setPageLoading(false)
    }

    return (
        <Wrapper loading={loading ? 'center' : 'normal'}>
            {loading ?
                <Loading>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loading>
                :
                <>
                    <Header type={type} setType={setType} />
                    {tests.length > 0 ?
                        <VersionTable tests={tests} type={type} loading={pageLoading} />
                        :
                        <NotFound>No tests of <span>{type}</span> type were found for this version</NotFound>}
                    {pages > 1 ? <Pagination page={page} pages={pages} setPage={changePage} /> : ''}
                </>
            }
        </Wrapper>
    )
}

export { VersionTests }