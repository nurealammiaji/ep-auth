import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav className="flex items-center justify-between [&>*]:mx-4 py-4 bg-green-200 rounded-2xl">
            <div>
                <h3 className="text-2xl font-bold">EP Auth</h3>
            </div>
            <div className="font-semibold [&>*]:mx-1 [&>*]:px-4 [&>*]:py-2 hover:[&>*]:bg-green-600 [&>*]:rounded-2xl hover:[&>*]:text-white">
                <NavLink className={({isActive}) => isActive ? 'bg-green-600 text-white' : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'bg-green-600 text-white' : ''} to="/register">Register</NavLink>
                <NavLink className={({isActive}) => isActive ? 'bg-green-600 text-white' : ''} to="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;