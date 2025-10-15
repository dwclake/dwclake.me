/* @Author: dwclake
 * @Created: 10-15-2025
 *
 * The root layout for the website containing the header,
 * the footer, and outlet for the main content
 */

import { NavLink, Outlet } from "react-router-dom"

import logo from "~/svg/ruka-green-transparent.svg"
import "@/styles/Root.css"

export const Root = () => {
    return (
        <div className="root-container roboto">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

const Header = () => {
    return (
        <header className="header-container" >
            <img className="header-logo" src={logo} alt="logo" />
            <h1 className="header-title">Devon James Webb</h1>
            <nav className="header-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/software">Software</NavLink></li>
                <li><NavLink to="/photography">Photography</NavLink></li>
                <li><NavLink to="/writing">Writing</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </nav>
            <nav className="header-social">
                <li><a href="https://github.com/dwclake" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/dwclake" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </nav>
        </header>
    )
}

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>Footer text</p>
        </footer>
    )
}
