import { FiAlignJustify, FiSearch, FiBell } from "react-icons/fi";
import { Link } from "react-router"

const Navbar = () => {
    return (
        <nav className='h-16 flex p-1 px-4 items-center justify-between bg-white shadow'>
            <ul className="flex justify-evenly items-center gap-6">
                <li>
                    <div className="sidebar-toggler">
                        <FiAlignJustify />
                    </div>
                </li>
                <li>
                    <div className="font-bold text-xl">
                        <h4><Link to="/">Medism</Link></h4>
                    </div>
                </li>
                <li>
                    <label className="search-box bg-slate-100 rounded-full p-2 flex gap-2 justify-center items-center">
                        <FiSearch />
                        <input type="text" name="search" id="search" placeholder="Search" />
                    </label>
                </li>
            </ul>
            <ul className="flex justify-evenly items-center gap-6">
                <li>
                    <button>Write</button>
                </li>
                <li>
                    <button><FiBell /></button>
                </li>
                <li>
                    <Link to={"/admin"} className="flex flex-col justify-center items-center animate-pulse">
                        <div className="bg-blue-700 rounded-full w-10 h-10 overflow-hidden"><img src="https://i.pravatar.cc/40?img=4" alt="Profile_Picture"/></div>
                        <span className="text-blue-400">Admin page here</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar