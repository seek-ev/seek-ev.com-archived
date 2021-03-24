import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, Title, Form, CInput, Icon, CloseIcon, SaveIcon, } from './styles'

// Icons
import { MdModeEdit } from 'react-icons/md'

// Actions
import { showSnackbar } from 'actions/snackbar'

const ContentUrl = ({ contentUrl }) => {
    const [editing, setEditing] = useState(false)
    const [prevUrl, setPrevUrl] = useState('')
    const [error, setError] = useState('')
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setUrl(contentUrl)
        setPrevUrl(contentUrl)
    }, [contentUrl])

    const onContentUrlChange = (e) => {
        setUrl(e.value)
    }

    const saveUrl = async () => {
        if (url.length > 60) return setError('Link is too long')
        else setError('')
        await axios.patch('/users', { contentUrl: url }).then(res => {
            setEditing(false)
            if (res.data.contentUrl === null) return dispatch(showSnackbar('Content url removed', 'success'))
            setUrl(res.data.contentUrl)
            setPrevUrl(res.data.contentUrl)
            dispatch(showSnackbar('Content url changed', 'success'))
        }).catch(err => dispatch(showSnackbar(err, 'error')))
    }

    const cancelEditing = () => {
        setEditing(false)
        setUrl(prevUrl)
    }

    return (
        <Wrapper>
            <Title>Content url</Title>

            <Form>
                <CInput name="contentUrl" type="text" placeholder="Content url" value={url} onChange={onContentUrlChange} disabled={!editing} error={error} maxlength="60" />
                {editing ? <Icon>
                    <CloseIcon onClick={() => cancelEditing()} />
                    <SaveIcon onClick={() => saveUrl()} />
                </Icon>
                    : <Icon>
                        <MdModeEdit onClick={() => setEditing(true)} />
                    </Icon>}
            </Form>
        </Wrapper>
    )
}

export { ContentUrl }