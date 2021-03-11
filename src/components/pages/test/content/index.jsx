import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, Buttons, LoadingWrapper, Loading } from './styles'

// Components
import { Button } from 'components/basic/button'

// Types components
import { Noise } from './types/noise'
import { Range } from './types/range'
import { Weight } from './types/weight'
import { Banana } from './types/banana'
import { Acceleration } from './types/acceleration'

// Actions
import { showSnackbar } from 'actions/snackbar'

const TestContent = ({ content, type }) => {
    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [test, setTest] = useState({})
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        setTest({ ...content })
    }, [content])

    const patch = async (data) => {
        await setLoading(true)
        await axios.patch(`/tests/${params.id}`, { test: data }).then(res => {
            setTest(res.data.test)
            setEditing(false)
            dispatch(showSnackbar('Updated successfully', 'success'))
        }).catch(err => dispatch(showSnackbar(err, 'error')))
        await setLoading(false)
    }

    // Types
    const TYPES = {
        noise: <Noise test={test} editing={editing} submit={submit} setSubmit={setSubmit} patch={patch} loading={loading} />,
        range: <Range test={test} editing={editing} submit={submit} setSubmit={setSubmit} patch={patch} loading={loading} />,
        weight: <Weight test={test} editing={editing} submit={submit} setSubmit={setSubmit} patch={patch} loading={loading} />,
        bananaBox: <Banana test={test} editing={editing} submit={submit} setSubmit={setSubmit} patch={patch} loading={loading} />,
        acceleration: <Acceleration test={test} editing={editing} submit={submit} setSubmit={setSubmit} patch={patch} loading={loading} />
    }

    return (
        <Wrapper>
            <Title>{type.charAt(0).toUpperCase() + type.slice(1)} test</Title>

            {TYPES[type]}

            <Buttons>
                {editing ? <><Button text="Cancel" mr="6" error onClick={() => setEditing(false)} /><Button text="Save" primary onClick={() => setSubmit(true)} /></> :
                    <Button text="Edit" blue onClick={() => setEditing(true)} />}
            </Buttons>

            {loading ?
                <LoadingWrapper>
                    <Loading />
                </LoadingWrapper>
                : ''}
        </Wrapper>
    )
}

export { TestContent }