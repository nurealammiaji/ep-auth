import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav className="flex items-center justify-between p-2 bg-green-200 rounded-2xl">
            <div>
                <h3 className="text-2xl font-bold">EP Auth</h3>
            </div>
            <div className="font-semibold [&>*]:px-4 [&>*]:py-2 hover:[&>*]:bg-green-600 [&>*]:rounded-2xl hover:[&>*]:text-white">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;