import { Outlet } from "react-router-dom"

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
                <li>Home</li>
                <li>Code</li>
                <li>Photography</li>
                <li>Writing</li>
                <li>Music</li>
                <li>About</li>
            </nav>
            <nav className="header-social">
                <li>GitHub</li>
                <li>LinkedIn</li>
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
