import logo from "~branding/ruka/svg/ruka-green-transparent.svg"
import styles from "./Header/Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header} >
            <img className={styles.logo} src={logo} alt="logo" />
            <ul className={styles.nav}>
                <li>Home</li>
                <li>Code</li>
                <li>Photography</li>
                <li>Writing</li>
                <li>Music</li>
                <li>About</li>
            </ul>
        </div>
    )
}
