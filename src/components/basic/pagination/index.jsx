import React from 'react'

// Styles
import { Wrapper, Button, Pages, Page } from './styles'

// Icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Pagination = ({ page, pages, setPage }) => {
    return (
        <Wrapper>
            {pages > 1 ? <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                <MdKeyboardArrowLeft />
            </Button> : ''}

            {pages <= 5 ? <Pages>
                {[...Array(pages)].map((p, i) => {
                    return <Page key={i} chosen={page === i + 1} onClick={() => setPage(i + 1)}>{i + 1}</Page>
                })}
            </Pages> :
                <Pages>
                    <Page chosen={page === 1} onClick={() => setPage(1)}>1</Page>
                    {page <= 3 ?
                        <>
                            {[2, 3, 4].map((p, i) => {
                                return <Page key={i} chosen={page === i + 2} onClick={() => setPage(i + 2)}>{i + 2}</Page>
                            })}
                            <Page>...</Page>
                        </> :
                        page >= pages - 3 ? <>
                            <Page>...</Page>
                            {[4, 3, 2, 1].map((p, i) => {
                                return <Page key={p} chosen={page === pages - p} onClick={() => setPage(pages - p)}>{pages - p}</Page>
                            })}
                        </>
                            : <>
                                <Page dots>...</Page>
                                {[-1, 0, 1].map((p, i) => {
                                    return <Page key={i} chosen={page === page + p} onClick={() => setPage(page + p)}>{page + p}</Page>
                                })}
                                <Page dots>...</Page>
                            </>}
                    <Page chosen={page === pages} onClick={() => setPage(pages)}>{pages}</Page>
                </Pages>
            }

            {pages > 1 ? <Button onClick={() => setPage(page + 1)} disabled={page === pages}>
                <MdKeyboardArrowRight />
            </Button> : ''}
        </Wrapper>
    )
}

export { Pagination }