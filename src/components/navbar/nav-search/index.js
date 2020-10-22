import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Actions
import { showSnackbar } from '../../../actions/snackbar'

// Styles
import './searchbar.sass'

const SearchBar = () => {
    const [cars, setCars] = useState([{ text: 'No cars found in your history', disabled: true }])
    const history = JSON.parse(localStorage.getItem('s_history'))
    const dispatch = useDispatch()
    const show = false

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef)

    const onSearchChange = async (e) => {
        if (e.target.value.length <= 0 && history) return setCars(history)
        await axios.get(`/cars/search/${e.target.value}`).then(res => {
            if (res.data.length > 0) setCars(res.data)
            else setCars([{ text: 'No cars found' }])
        }).catch(err => {
            if (err.response.status === 404) setCars([{ text: 'No cars found', disabled: true }])
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

            if (history) setCars(history)

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const saveHistory = (e) => {

        const id = e.target.pathname.replace('/', '')
        const history = JSON.parse(localStorage.getItem('s_history'))
        if (history) {
            if (history.length >= 5) history.pop()
            const found = history.findIndex(h => h.id === id)
            if (found !== -1) history.splice(found, 1)
            history.unshift({ id: id, model: e.target.innerHTML })
            localStorage.setItem('s_history', JSON.stringify(history))
        }
        else localStorage.setItem('s_history', JSON.stringify([{ id: id, model: e.target.innerHTML }]))
        e.persist()
    }

    return (
        <div className="search-bar" ref={wrapperRef}>
            <input className="search-input" placeholder="Search" onChange={onSearchChange} />

            <div className={cars.length > 0 && show ? 'search-dropdown' : 'search-dropdown-hidden'}>
                {cars.map((value) => {
                    return <Link className={'search-dropdown-item ' + (value.disabled ? ' search-disabled ' : '')} onClick={saveHistory} to={`/${value.id ? value.id : ''}`} key={value.id ? value.id : 0}>{value.model ? value.model : value.text}</Link>
                })}
            </div>
        </div>
    )
}

export { SearchBar }