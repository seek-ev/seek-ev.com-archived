import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'

// Styles
import { Wrapper, BrandNotFound, BrandNotFoundCode, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { BrandContainer } from 'components/pages/brand'

// Actions
import { showSnackbar } from 'actions/snackbar'

const BrandPage = () => {
    const [loading, setLoading] = useState(true)
    const [brand, setBrand] = useState({})
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        const fetchBrand = async () => {
            await setLoading(true)
            await axios.get(`/brands/name/${params.name}`).then(res => setBrand(res.data))
                .catch(err => {
                    if (err.response && err.response.status === 404) return
                    dispatch(showSnackbar(err, 'error'))
                })

            await setLoading(false)
        }

        fetchBrand()
    }, [params, dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>{brand && brand.name ? brand.name : 'Brand not found'}</title>
                <meta name="description" content={brand && brand.description ? brand.description : ''} />

                {brand && brand.name ? <meta property="og:title" content={brand.name} /> : ''}
                {brand && brand.description ? <meta property="og:description" content={brand.description} /> : ''}
                {brand && brand.avatar ? <meta property="og:image" content={brand.avatar.url} /> : ''}
            </Helmet>

            <Navbar />

            {Object.keys(brand).length > 0 && !loading ? <BrandContainer brand={brand} /> : ''}

            {Object.keys(brand).length === 0 && !loading ? <BrandNotFound>
                <BrandNotFoundCode>404</BrandNotFoundCode>
                <div>Oops!</div>
                <div><span>{params.name}</span> brand was not found</div>
            </BrandNotFound> : ''}

            {loading ? <Loading /> : ''}
        </Wrapper>
    )
}

export { BrandPage }