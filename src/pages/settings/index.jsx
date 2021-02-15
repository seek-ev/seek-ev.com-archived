import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'

// Styles
import { Wrapper } from './styles'

// Actions
import { showSnackbar } from 'actions/snackbar'
import { setUser } from 'actions/user'

// Components
import { Navbar } from 'components/navbar'
import { Settings } from 'components/pages/settings'

const SettingsPage = () => {
    const [user, setStateUser] = useState({})
    const [item, setItem] = useState('profile')
    const dispatch = useDispatch()
    const location = useLocation()

    const onItemChange = async (item) => {
        await setItem(item)
    }

    useEffect(() => {
        const me = JSON.parse(localStorage.getItem('s_user'))

        if (location.search) {
            return setItem('connections')
        }

        const fetchUser = async () => {
            await axios.get('/users/@me').then(res => {
                setStateUser(res.data)
                dispatch(setUser(res.data))
            }).catch(err => {
                setStateUser(me)
                dispatch(showSnackbar(err, 'error'))
            })
        }

        fetchUser()
    }, [location, dispatch])

    return (
        <Wrapper>
            <Helmet>
                <title>{`Settings - ${item.charAt(0).toUpperCase() + item.slice(1)}`}</title>
                <meta property="description" content="Your settings" />
            </Helmet>

            <Navbar />

            <Settings item={item} user={user} location={location} onItemChange={onItemChange} />
        </Wrapper>
    )
}

export { SettingsPage }
