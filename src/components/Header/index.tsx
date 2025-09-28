import "./Header.css";
const selfie = require("../../../assets/selfie.jpg");

export function Header() {
    return (
        <div className="header-body">
            <img className="selfie" src={selfie} alt="selfie" />
            <ul className="nav">
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