import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, Pagination, Page } from './styles'

// Components
import { Test } from './test'

const TestsList = ({ tests }) => {
    const [pages, setPages] = useState(1)
    const [list, setList] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        setList(tests.length > 0 ? tests.slice(0, 10) : [])
        setPages(Math.ceil(tests.length / 10))
    }, [tests])

    const changePage = (newPage) => {
        if (newPage === page) return
        if (newPage === 0) setList(tests.slice(0, 10))
        else setList(tests.slice(newPage * 10, newPage * 10 + 10))
        setPage(newPage)
    }

    return (
        <Wrapper>
            {list.map((t, i) => { return <Test test={t} key={t.id} /> })}
            {pages > 1 ? <Pagination>
                {Array.from(Array(pages), (e, i) => {
                    return <Page chosen={page === (i)} key={i} onClick={() => changePage(i)}>{i + 1}</Page>
                })}
            </Pagination> : ''}
        </Wrapper>
    )
}

export { TestsList }