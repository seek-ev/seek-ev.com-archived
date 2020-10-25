import React, { useRef, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { MdArrowDropDownCircle } from "react-icons/md";
import { useDispatch } from 'react-redux'

// Styles
import './nav_menu.sass'

// Actions
import { logoutUser } from '../../../actions/auth'


const NavMenu = () => {
    const [redirect, setRedirect] = useState(null)
    const dispatch = useDispatch()

    const showDrop = (e) => {
        if (document.getElementsByClassName('nav-dropmenu')[0] && document.getElementsByClassName('nav-dropmenu')[0].style.display !== 'block') document.getElementsByClassName('nav-dropmenu')[0].style.display = 'block'
        else if (document.getElementsByClassName('nav-dropmenu')[0]) document.getElementsByClassName('nav-dropmenu')[0].style.display = 'none'
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    if (document.getElementsByClassName('nav-dropmenu')[0]) {
                        document.getElementsByClassName('nav-dropmenu')[0].style.display = 'none'
                    }
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const logout = () => {
        dispatch(logoutUser())
        setRedirect('/login')
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div className="nav-menu" ref={wrapperRef}>
            <div className="nav-menu-icon" onClick={showDrop} >
                <MdArrowDropDownCircle />
            </div>

            <div className="nav-dropmenu">
                <Link to="/settings">
                    <div className="nav-menu-item">Settings</div>
                </Link>

                <div className="nav-menu-item log-out" onClick={logout}>Log out</div>
            </div>
        </div>
    )
}

export { NavMenu }