import React, { useState, useEffect } from 'react'

// Styles
import { Wrapper, Pagination, Page } from './styles'

// Components
import { Test } from './test'

const TestsList = ({ tests }) => {
    const [pages, setPages] = useState(0)
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const testArr = []
        let x = 0
        while (x < tests.length && x <= 10) {
            testArr.push(tests[x])
            x++
        }
        setList(testArr)
        setPages(Math.ceil(tests.length / 10))
    }, [tests])

    const changePage = (newPage) => {
        if (newPage === page) return
        if (newPage === 1) setList(tests.slice(0, 10))
        else setList(tests.slice(page * 10, page * 10 + 10))
        setPage(newPage)
    }

    return (
        <Wrapper>
            {list.map((t, i) => { return <Test test={t} key={t.id} /> })}
            <Pagination>
                {Array.from(Array(pages), (e, i) => {
                    return <Page chosen={page === (i + 1)} key={i} onClick={() => changePage(i + 1)}>{i + 1}</Page>
                })}
            </Pagination>
        </Wrapper>
    )
}

export { TestsList }