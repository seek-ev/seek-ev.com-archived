import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'

// Styles
import { Loading } from 'components/basic/loading/styles.js'
import {
  Container,
  Wrapper,
  Heading,
  CLink,
  WrapperColumn,
} from './styles'

// Components
import { Navbar } from 'components/navbar'
import { Comparison } from 'components/pages/compare'

// Actions
import { showSnackbar } from 'actions/snackbar'

const ComparisonPage = () => {
  const [loading, setLoading] = useState(true)
  const [comparison, setComparison] = useState({})
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
        await setLoading(true)

        await axios.get(`/compare/${params.url}`).then(res => {
            setComparison(res.data)
        }).catch(err => dispatch(showSnackbar(err, 'error')))

        await setLoading(false)
    }

    fetchData()
}, [dispatch, params])

  return (
    <Container>
    <Helmet>
        <title>Comparison {`${comparison.name ? comparison.name : 'was not found'}`}</title>
    </Helmet>

    <Navbar />

    {Object.keys(comparison).length > 0 && !loading ?
      <Wrapper>
        <Comparison comparison={comparison} />
      </Wrapper>
    : '' }

    {Object.keys(comparison).length === 0 && !loading ? <WrapperColumn>
       <Heading>Comparison <span>{params.url}</span> was not found</Heading>
       <CLink to="/home">Come back to home page</CLink>
      </WrapperColumn> : '' }

    {loading ? <Loading /> : ''}
    </Container>
  )
}

export { ComparisonPage }