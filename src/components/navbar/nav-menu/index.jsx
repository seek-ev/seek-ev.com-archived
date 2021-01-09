import React, { useRef, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Styles
import { Menu, Icon, DropMenu, MenuItem, Logout } from './styles'

// Icons
import { MdArrowDropDownCircle } from "react-icons/md"

// Actions
import { logoutUser } from 'actions/auth'

const NavMenu = () => {
    const [redirect, setRedirect] = useState(null)
    const dispatch = useDispatch()

    const showDrop = (e) => {
        if (document.getElementById('nav-dropmenu') && document.getElementById('nav-dropmenu').style.display !== 'block') document.getElementById('nav-dropmenu').style.display = 'block'
        else if (document.getElementById('nav-dropmenu')) document.getElementById('nav-dropmenu').style.display = 'none'
    }

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    if (document.getElementById('nav-dropmenu')) {
                        document.getElementById('nav-dropmenu').style.display = 'none'
                    }
                }
            }

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    const logout = () => {
        dispatch(logoutUser())
        setRedirect('/login')
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <Menu ref={wrapperRef}>
            <Icon onClick={showDrop} >
                <MdArrowDropDownCircle />
            </Icon>

            <DropMenu id="nav-dropmenu">
                <Link to="/requests">
                    <MenuItem>Your Requests</MenuItem>
                </Link>

                <Link to="/cars">
                    <MenuItem>Your Cars</MenuItem>
                </Link>

                <Link to="/settings">
                    <MenuItem>Settings</MenuItem>
                </Link>

                <Logout onClick={logout}>Log out</Logout>
            </DropMenu>
        </Menu>
    )
}

export { NavMenu }