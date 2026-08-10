export default function Footer() {
    return(
            <footer className="bg-[#1d3557] text-[#f1faee] text-center p-[20px] mt-40">
             <p className="italic">© 2026 Course Management. All rights reserved.</p>
             <div>
                <a href="#" className="my-[0px] mx-[10px] no-underline transition-colors duration-300 hover:text-red-500 tracking-[0.5px]">GitHub</a>
                <a href="#" className="my-[0px] mx-[10px] no-underline transition-color duration-300 tracking-[0.5px] hover:text-red-500">Facebook</a>
                <a href="#" className="my-[0px] mx-[10px] no-underline transition-color duration-300 tracking-[0.5px] hover:text-red-500 ">LinkedIn</a>
             </div>
             </footer>
    );
}