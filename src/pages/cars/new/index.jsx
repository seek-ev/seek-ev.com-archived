import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Styles
import { Container, Wrapper, Submit, Loading, Processing } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { Button } from 'components/basic/button'
import { NewHeader } from 'components/pages/cars/new/header'

// Actions
import { showSnackbar } from 'actions/snackbar'

const NewCarPage = () => {
    const [car, setCar] = useState({})
    const [picture, setPicture] = useState(null)
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [redirect, setRedirect] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await setLoading(true)
            await axios.get('/categories').then(res => { setCategories([{ id: 'none', hidden: true, name: 'Choose category' }, ...res.data]) }).catch(err => dispatch(showSnackbar(err, 'err')))
            await axios.get('/brands').then(res => { setBrands([{ id: 'none', hidden: true, name: 'Choose brand' }, ...res.data]) }).catch(err => dispatch(showSnackbar(err, 'err')))
            await setLoading(false)
        }

        fetchData()
    }, [dispatch])

    const modelChanged = async (e) => {
        await setCar({ ...car, model: e.value })
        await disabledFunc()
    }

    const yearsChanged = async (e) => {
        await setCar({ ...car, productionYears: e.value })
        await disabledFunc()
    }

    const categoryChanged = async (e) => {
        await setCar({ ...car, category: parseInt(e.value) })
        await disabledFunc()
    }

    const brandChanged = async (e) => {
        await setCar({ ...car, brand: parseInt(e.value) })
        await disabledFunc()
    }

    const conceptChanged = async (e) => {
        await setCar({ ...car, concept: e.checked })
    }

    const picChanged = async (pic) => {
        await setPicture(pic)
    }

    // Disabled until all fields are satisfied
    const disabledFunc = () => {
        if (!car.model || (car.model && car.model.length) <= 0) return setDisabled(true)
        if (!car.productionYears || (car.productionYears && car.productionYears.length < 4)) return setDisabled(true)
        if (!car.category) return setDisabled(true)
        if (!car.brand) return setDisabled(true)
        return setDisabled(false)
    }

    const createCar = async () => {
        await setProcessing(true)

        if (
            picture && (picture.type !== 'image/jpeg' &&
                picture.type !== 'image/png')
        ) {
            dispatch(showSnackbar('Ops, we can\'t accept this file type!', 'error'))
            return setProcessing(false)
        }

        await axios.post('/cars', car).then(async res => {
            if (!picture) return setRedirect(`/cars/${res.data.id}`)

            const fd = new FormData()
            fd.append('pictures', picture)

            await axios.post(`/cars/${res.data.id}/pictures`, fd, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).catch(err => dispatch(showSnackbar(err, 'error')))
            return setRedirect(`/cars/${res.data.id}`)
        }).catch(async err => await dispatch(showSnackbar(err, 'error')))

        if (!redirect) return setProcessing(true)
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Container>
            <Helmet>
                <title>New car? Yes!</title>
            </Helmet>

            <Navbar />

            {loading ? <Loading></Loading> :
                <Wrapper>
                    <NewHeader categories={categories} brands={brands} modelChanged={modelChanged} yearsChanged={yearsChanged} categoryChanged={categoryChanged} brandChanged={brandChanged} picChanged={picChanged} conceptChanged={conceptChanged} />
                    <Submit>
                        <Button text="Create" raise primary onClick={() => createCar()} disabled={disabled} />
                    </Submit>
                </Wrapper>}

            {processing ? <Processing>
                <Loading top></Loading>
            </Processing> : ''}
        </Container>
    )
}

export { NewCarPage }

