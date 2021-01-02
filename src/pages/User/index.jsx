import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import Helmet from 'react-helmet'

// Styles
import { Wrapper, NotFound, NotFoundTitle, LoadingWrapper, Loading } from './styles'

// Components
import { Navbar } from 'components/navbar'
import { User } from 'components/pages/user'

// Actions
import { showSnackbar } from 'actions/snackbar'

const UserPage = () => {
    const [user, setUser] = useState({})
    const [item, setItem] = useState('cars')
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const dispatch = useDispatch()

    const onItemChange = (item) => {
        setItem(item)
    }

    useEffect(() => {
        const fetchUser = async () => {
            await setLoading(true)

            await axios.get(`/users/username/${params.username}`).then(async res => {
                await setUser(res.data)
            }).catch(err => {
                if (err.response && err.response.status === 404) return
                dispatch(showSnackbar(err, 'error'))
            })

            await setLoading(false)
        }

        fetchUser()
    }, [params, dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>{user.username ? user.username : 'User not found'}</title>
            </Helmet>

            <Navbar />

            {!loading && Object.keys(user).length > 0 ? <User item={item} user={user} loading={loading} onItemChange={onItemChange} /> : ''}

            {!loading && Object.keys(user).length === 0 ? <NotFound>
                <NotFoundTitle>User <span>{params.username}</span> was not found :(</NotFoundTitle>
            </NotFound> : ''}

            {loading ? <LoadingWrapper><Loading></Loading></LoadingWrapper> : ''}
        </Wrapper>
    )
}

export { UserPage }

