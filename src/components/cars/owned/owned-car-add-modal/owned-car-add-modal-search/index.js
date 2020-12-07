import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import './search.sass'

// Actions
import { showSnackbar } from '../../../../../actions/snackbar'

const OwnedCarAddModalSearch = (props) => {
    const [found, setFound] = useState([])
    const dispatch = useDispatch()

    const carSearchRef = useRef(null)
    useOutsideAlerter(carSearchRef)

    const search = async (e) => {
        if (e.target.value.length === 0) return setFound([])
        await axios.get(`/search/model/${e.target.value}`).then(res => setFound(res.data)).catch(err => dispatch(showSnackbar(err, 'error')))
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    if (document.getElementsByClassName('car-search-dropdown')[0]) {
                        document.getElementsByClassName('car-search-dropdown')[0].className = 'car-search-dropdown-hidden'
                    }
                }

                if (ref.current && ref.current.contains(e.target)) {
                    if (document.getElementsByClassName('car-search-dropdown-hidden')[0]) {
                        document.getElementsByClassName('car-search-dropdown-hidden')[0].className = 'car-search-dropdown'
                    }
                }
            }

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    const chooseCar = (car) => {
        props.setCar(car)
    }

    return (
        <div className="owned-car-add-modal-search" ref={carSearchRef}>
            <input className="car-search-input" placeholder="Type here" onChange={search} autoComplete="off" />

            <div className={found.length > 0 ? 'car-search-dropdown' : 'car-search-dropdown-hidden'}>
                {found.map((value) => {
                    return <div onClick={() => chooseCar(value)} className='car-search-dropdown-item' key={value.id}>
                        <div className="car-search-info">
                            <span className="car-search-text">{value.brand.name + ' ' + value.model}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export { OwnedCarAddModalSearch }