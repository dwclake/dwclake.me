import { Outlet } from "react-router-dom"

import { GLCanvas } from "@/components/ui/glcanvas"

import logo from "~/svg/ruka-green-transparent.svg"
import styles from "@/styles/Root.module.css"

export const Root = () => {
    const render = (gl: WebGLRenderingContext, time: number) => {
        const r = Math.abs(Math.sin(time * 0.8))
        const g = Math.abs(Math.sin(time * 0.6))
        const b = Math.abs(Math.sin(time * 1.0))

        gl.clearColor(r, g, b, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)
    }

    return (
        <>
            <Header />
            <main>
                <GLCanvas width="500" height="500" onRender={render} />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

const Header = () => {
    return (
        <header className={styles.header} >
            <img className={styles["header-logo"]} src={logo} alt="logo" />
            <nav className={styles.nav}>
                <li>Home</li>
                <li>Code</li>
                <li>Photography</li>
                <li>Writing</li>
                <li>Music</li>
                <li>About</li>
            </nav>
        </header>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Devon James Webb. All rights reserved.</p>
        </footer>
    )
}
