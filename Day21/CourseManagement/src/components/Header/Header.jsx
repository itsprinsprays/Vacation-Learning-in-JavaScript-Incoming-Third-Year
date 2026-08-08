import { Link } from "react-router-dom"
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <h2 className ="logo">Course Management</h2>

            <nav>
                <Link to="#">Home</Link>
                <Link to="/Day24">About</Link>
                <Link to="#">Contact</Link>
            </nav>
        </header>
    )
}
 