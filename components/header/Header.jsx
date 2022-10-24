import '../../styles/globals.css'
import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">Supawat Suntornlimsiri</div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href='/' className="active">Home</a>
                    </li>
                    <li>
                        <a href='/' className="active">Contact</a>
                    </li>
                    <li>
                        <a href='/' className="active">Resume</a>
                    </li>
                    <li>
                        <a href='/' className="active">Documentation</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header()