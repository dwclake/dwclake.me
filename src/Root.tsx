/* @Author: dwclake
 * @Created: 10-15-2025
 *
 * The root layout for the website containing the header,
 * the footer, and outlet for the main content
 */

import { NavLink, Outlet } from "react-router-dom"

import { useDispatch, useSelector } from "@/store"
import { setIsOpen } from "@/features/dropdown/Dropdown"
import { Dropdown } from "@/components/ui/dropdown"
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
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(setIsOpen(false))
    }

    return (
        <header className="header-container" >
            <img className="header-logo" src={logo} alt="logo" />
            <h1 className="header-title">Devon James Webb</h1>
            <Dropdown className="header-nav">
                <NavLink to="/" onClick={onClick}>Home</NavLink>
                <NavLink to="/software" onClick={onClick} >Software</NavLink>
                <NavLink to="/photography" onClick={onClick}>Photography</NavLink>
                <NavLink to="/writing" onClick={onClick}>Writing</NavLink>
                <NavLink to="/music" onClick={onClick}>Music</NavLink>
                <NavLink to="/about" onClick={onClick}>About</NavLink>
            </Dropdown>
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
