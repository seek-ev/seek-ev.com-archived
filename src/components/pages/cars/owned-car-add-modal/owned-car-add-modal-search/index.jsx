import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, SearchInput, Dropdown, DropdownItem, Desc } from './styles'

// Actions
import { showSnackbar } from 'actions/snackbar'

const OwnedCarAddModalSearch = ({ setCar }) => {
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
        setCar(car)
    }

    return (
        <Wrapper ref={carSearchRef}>
            <SearchInput className="car-search-input" placeholder="Type here" onChange={search} autoComplete="off" />

            {found.length > 0 ?
                <Dropdown>
                    {found.map((value) => {
                        return <DropdownItem onClick={() => chooseCar(value)} key={value.id}>
                            <Desc>
                                <span>{value.brand.shortName + ' ' + value.model}</span>
                            </Desc>
                        </DropdownItem>
                    })}
                </Dropdown>
                : ''}
        </Wrapper>
    )
}

export { OwnedCarAddModalSearch }