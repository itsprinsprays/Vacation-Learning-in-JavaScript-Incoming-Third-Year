import { Link } from "react-router-dom"

export default function Navs() {


    return (
        <>
        <div className="bg-[green] inline-block h-screen w-[200px] ">
            <nav className="flex flex-col text-white mt-4 items-start gap-4 px-6 pt-25">
                <Link to="/courses">About</Link>
            </nav>
        </div>

        </>
    )
}