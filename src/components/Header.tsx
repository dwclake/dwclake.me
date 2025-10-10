import "./Header/Header.css"
import logo from "~branding/ruka/svg/ruka-green-transparent.svg"

export const Header = () => {
    return (
        <div className="header" >
            <img className="logo" src={logo} alt="logo" />
            <ul className="nav">
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
