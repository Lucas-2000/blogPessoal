import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {
    return (
        <div id="component-header">
            <header>
                <Link to="/" style={{ color: '#FFF' }}>
                    <h1>Lucas Blogs</h1>
                </Link>
                <Link to="/">
                    <button type="submit">Home</button>
                </Link>
                <Link to="/create">
                    <button type="submit">Criar</button>
                </Link>
            </header>
        </div>
    )
}

export default Header
