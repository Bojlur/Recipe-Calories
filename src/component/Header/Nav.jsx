import { IoPersonCircleOutline } from "react-icons/io5";
const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className=" text-4xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-1/2 max-w-xs rounded-full" />
                    <button className="text-2xl bg-green-400 rounded-full p-1"><IoPersonCircleOutline /></button>
                </div>
            </div>
        </div>
    );
};

export default Nav;