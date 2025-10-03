import "./Header/Header.css";
import selfie from "@images/selfie.jpg";

const Header = () => {
    return (
        <div className="header" >
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

export { Header };
