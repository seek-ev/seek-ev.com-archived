import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Icons
import { MdClose } from 'react-icons/md'

// Styles
import { Wrapper, Input, Dropdown, DropdownItem, Info, InfoImg, SearchText, SearchDescription, HistoryIcon } from './styles'

// Actions
import { showSnackbar } from 'actions/snackbar'

const SearchBar = () => {
    const [results, setResults] = useState([{ text: 'Nothing here yet', disabled: true }])
    const history = JSON.parse(localStorage.getItem('s_history'))
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    const onSearchChange = async (e) => {
        if (e.target.value.length <= 0 && history) return setResults([{ text: 'Browse history', disabled: true, history: true }, ...history])
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
                    setShow(false)
                }

                if (ref.current && ref.current.contains(e.target)) {
                    setShow(true)
                }
            }

            if (history) setResults([{ text: 'Browse history', disabled: true, history: true }, ...history])

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
                switch (type) {
                    case 'Brand':
                        const foundBrand = history.findIndex(h => h.id === id && h.shortName === name)
                        if (foundBrand !== -1) history.splice(foundBrand, 1)
                        else if (history.length >= 5) history.pop()
                        history.unshift({ id: id, shortName: name, avatar: { url: avatar } })
                        break
                    case 'Car':
                        const foundCar = history.findIndex(h => h.id === id && h.model === name)
                        if (foundCar !== -1) history.splice(foundCar, 1)
                        else if (history.length >= 5) history.pop()
                        history.unshift({ id: id, model: name, brand: { avatar: { url: avatar } } })
                        break
                    case 'User':
                        const foundUser = history.findIndex(h => h.id === id && h.username === name)
                        if (foundUser !== -1) history.splice(foundUser, 1)
                        else if (history.length >= 5) history.pop()
                        history.unshift({ id: id, username: name, avatar: { url: avatar } })
                        break
                    default:
                        break
                }
                setResults([{ text: 'Browse history', disabled: true, history: true }, ...history])
                localStorage.setItem('s_history', JSON.stringify(history))
            }
            else {
                switch (type) {
                    case 'Brand':
                        setResults([{ text: 'Browse history', disabled: true, history: true }, { id: id, shortName: name, avatar: { url: avatar } }])
                        localStorage.setItem('s_history', JSON.stringify([{ id: id, shortName: name, avatar: { url: avatar } }]))
                        break
                    case 'Car':
                        setResults([{ text: 'Browse history', disabled: true, history: true }, { id: id, model: name, brand: { avatar: { url: avatar } } }])
                        localStorage.setItem('s_history', JSON.stringify([{ id: id, model: name, brand: { avatar: { url: avatar } } }]))
                        break
                    case 'User':
                        setResults([{ text: 'Browse history', disabled: true, history: true }, { id: id, username: name, avatar: { url: avatar } }])
                        localStorage.setItem('s_history', JSON.stringify([{ id: id, username: name, avatar: { url: avatar } }]))
                        break
                    default:
                        break
                }
            }
        }

        document.getElementById('nav-search-input').value = ''
        e.persist()
    }

    return (
        <Wrapper ref={wrapperRef}>
            <Input id="nav-search-input" placeholder="Search" onChange={onSearchChange} autoComplete="off" />

            {results.length > 0 && show ? <Dropdown >
                {results.map((value) => {
                    return <DropdownItem
                        disabled={value.disabled}
                        history={value.history}
                        onClick={saveHistory}
                        to={`/${value.model ? value.model : value.shortName ? 'b/' + value.shortName : value.username ? 'u/' + value.username : ''}`}
                        key={(value.id ? value.id : 0) + (value.shortName ? value.shortName : value.model ? value.model : value.username ? value.username : value.text)}
                    >
                        <Info className="search-info">
                            {value.disabled ? '' : <InfoImg round={value.username} src={value.brand ? value.brand.avatar ? value.brand.avatar.url : 'se_dark.png' : value.avatar ? value.avatar.url : '/se_dark.png'} onError={(e) => { e.target.onerror = null; e.target.src = '/se_dark.png' }} alt={value.name} />}
                            <SearchText className="search-text">{value.model ? value.model : value.shortName ? value.shortName : value.username ? value.username : value.text}</SearchText>
                        </Info>

                        {value.disabled ? '' : <SearchDescription className={(value.disabled ? 'search-desc-hidden' : 'search-desc')}>{value.model ? 'Car' : value.username ? 'User' : 'Brand'}</SearchDescription>}
                        {value.history ? <HistoryIcon onClick={clearHistory}><MdClose /></HistoryIcon> : ''}
                    </DropdownItem>
                })}
            </Dropdown> : ''}
        </Wrapper>
    )
}

export { SearchBar }