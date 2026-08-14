import { Link } from "react-router-dom"


export default function Header() {
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-[#e63946] to-[#f1faee] py-[15px] px-[30px] shadow-md">
            <h2 className ="text-white font-bold text-5xl">Course Management</h2>

            <nav>
                <Link to="/" className="p-[10px] text-[black] no-underline transition-colors duration-300 hover:text-red-500">Dashboard</Link>
                <Link to="/Day24" className="p-[10px] text-black no-underline transition-colors duration-300 hover:text-red-500">About</Link>
                <Link to="/Day23" className="p-[10px] text-black no-underline transition-colors duration-300 hover:text-red-500">Contact</Link>
            </nav>
        </header>
    )
}
 