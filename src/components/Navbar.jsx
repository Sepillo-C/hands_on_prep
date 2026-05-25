import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li> {/*Instead of the regular <a> tag, react uses Link*/}
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/About">About</Link>
                </li>

                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;