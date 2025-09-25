import "../styles/Header.css";

export function Header() {
    return (
        <div className="header">
            <img id="logo" src="../assets/branding/png/ruka-green-transparent.png" alt="Logo" />
            <ul id="links">
                <li>Home</li>
                <li>Code</li>
                <li>Photography</li>
                <li>Writing</li>
                <li>Music</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Header;
