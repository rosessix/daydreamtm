import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'
export default function (props) {
    let {darkMode, toggleDarkMode} = props
    const location = useLocation()
    const currentTab = location.pathname
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Login', path: '/login' },
    ]


    const NavItem = ({ label, path }) => {
        const classes = "px-4 hover:text-emerald-500 hover:underline "
        let isActive = currentTab === path;
        return (
            <li>
                <Link to={path}>
                    <a className={isActive ? classes + "font-bold" : classes}>
                        {label}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <ul className="inline-flex items-center">
            {navItems.map((item, index) => (
                <NavItem key={index} label={item.label} path={item.path} />
            ))}

            <li className='align-middle' onClick={() => toggleDarkMode(!darkMode)}>
                {darkMode ?
                    <RiMoonClearFill>helo</RiMoonClearFill> 
                : <RiSunFill></RiSunFill>}
            </li>
        </ul>
    )
}