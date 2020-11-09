import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Icons
import { MdClose } from 'react-icons/md'

// Actions
import { showSnackbar } from '../../../actions/snackbar'

// Styles
import './searchbar.sass'

const SearchBar = () => {
    const [results, setResults] = useState([{ text: 'Nothing here yet', disabled: true }])
    const history = JSON.parse(localStorage.getItem('s_history'))
    const dispatch = useDispatch()
    const show = false

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    const onSearchChange = async (e) => {
        if (e.target.value.length <= 0 && history) return setResults([{ text: 'Search history', disabled: true, history: true }, ...history])
        await axios.get(`/search/${e.target.value}`).then(res => {
            if (res.data.length > 0) setResults(res.data)
            else setResults([{ text: 'No results found', disabled: true }])
        }).catch(err => {
            if (err.response && err.response.status === 404) setResults([{ text: 'No results found', disabled: true }])
            else dispatch(showSnackbar(err, 'error'))
        })
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    if (document.getElementsByClassName('search-dropdown')[0]) {
                        document.getElementsByClassName('search-dropdown')[0].className = 'search-dropdown-hidden'
                    }
                }

                if (ref.current && ref.current.contains(e.target)) {
                    if (document.getElementsByClassName('search-dropdown-hidden')[0]) {
                        document.getElementsByClassName('search-dropdown-hidden')[0].className = 'search-dropdown'
                    }
                }
            }

            if (history) setResults([{ text: 'Search history', disabled: true, history: true }, ...history])

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    const clearHistory = (e) => {
        e.preventDefault()
        setResults([{ text: 'Nothing here yet', disabled: true }])
        localStorage.removeItem('s_history')
    }

    const saveHistory = (e) => {
        if (e.currentTarget.children[1] && e.currentTarget.children[1].className === 'search-desc') {
            const type = e.currentTarget.children[1].innerText
            const path = e.currentTarget.pathname
            const id = path.replace(('/b'), '').replace('/u', '').replace('/', '')
            const name = e.currentTarget.children[0].children[1].innerText
            const history = JSON.parse(localStorage.getItem('s_history'))
            let avatar

            if (e.currentTarget.children[0].children[0].className === 'search-avatar' && e.currentTarget.children[0].children[0].currentSrc) avatar = e.currentTarget.children[0].children[0].currentSrc
            else if (e.currentTarget.children[0].children[0].className.split(' ')) avatar = e.currentTarget.children[0].children[0].currentSrc
            else avatar = 'se_dark.png'

            if (history) {
                if (history.length >= 5) history.pop()
                switch (type) {
                    case 'Brand':
                        const foundBrand = history.findIndex(h => h.id === id && h.shortName === name)
                        if (foundBrand !== -1) history.splice(foundBrand, 1)
                        history.unshift({ id: id, shortName: name, avatar: { url: avatar } })
                        break
                    case 'Car':
                        const foundCar = history.findIndex(h => h.id === id && h.model === name)
                        if (foundCar !== -1) history.splice(foundCar, 1)
                        history.unshift({ id: id, model: name, brand: { avatar: { url: avatar } } })
                        break
                    case 'User':
                        const foundUser = history.findIndex(h => h.id === id && h.username === name)
                        if (foundUser !== -1) history.splice(foundUser, 1)
                        history.unshift({ id: id, username: name, avatar: { url: avatar } })
                        break
                    default:
                        break
                }
                setResults([{ text: 'Search history', disabled: true, history: true }, ...history])
                localStorage.setItem('s_history', JSON.stringify(history))
            }
            else {
                switch (type) {
                    case 'Brand':
                        setResults([{ text: 'Search history', disabled: true, history: true }, { id: id, shortName: name, avatar: { url: avatar } }])
                        localStorage.setItem('s_history', JSON.stringify([{ id: id, shortName: name, avatar: { url: avatar } }]))
                        break
                    case 'Car':
                        setResults([{ text: 'Search history', disabled: true, history: true }, { id: id, model: name, brand: { avatar: { url: avatar } } }])
                        localStorage.setItem('s_history', JSON.stringify([{ id: id, model: name, brand: { avatar: { url: avatar } } }]))
                        break
                    case 'User':
                        setResults([{ text: 'Search history', disabled: true, history: true }, { id: id, username: name, avatar: { url: avatar } }])
                        localStorage.setItem('s_history', JSON.stringify([{ id: id, username: name, avatar: { url: avatar } }]))
                        break
                    default:
                        break
                }
            }
        }

        document.getElementsByClassName('search-input')[0].value = ''
        e.persist()
    }

    return (
        <div className="search-bar" ref={wrapperRef}>
            <input className="search-input" placeholder="Search" onChange={onSearchChange} autoComplete="off" />

            <div className={results.length > 0 && show ? 'search-dropdown' : 'search-dropdown-hidden'}>
                {results.map((value) => {
                    return <Link className={'search-dropdown-item' + (value.disabled ? ' search-disabled ' : '') + (value.history ? ' search-history' : '')} onClick={saveHistory} to={`/${value.model ? value.model : value.shortName ? 'b/' + value.shortName : value.username ? 'u/' + value.username : ''}`} key={(value.id ? value.id : 0) + (value.shortName ? value.shortName : value.model ? value.model : value.username ? value.username : value.text)} >
                        <div className="search-info">
                            <img className={(!value.disabled ? 'search-avatar' : 'search-avatar-hidden') + (value.username ? ' search-avatar-round' : '')} src={value.brand ? value.brand.avatar ? value.brand.avatar.url : 'se_dark.png' : value.avatar ? value.avatar.url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={value.name} />
                            <span className="search-text">{value.model ? value.model : value.shortName ? value.shortName : value.username ? value.username : value.text}</span>
                        </div>

                        <span className={(value.disabled ? 'search-desc-hidden' : 'search-desc')}>{value.model ? 'Car' : value.username ? 'User' : 'Brand'}</span>
                        <div className={(value.history ? 'search-icon' : 'search-desc-hidden')} onClick={clearHistory}>
                            <MdClose />
                        </div>
                    </Link>
                })}

            </div>
        </div>
    )
}

export { SearchBar }