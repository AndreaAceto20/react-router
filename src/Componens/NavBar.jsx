import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/info">Info</NavLink>
            <NavLink to="/posts">Post</NavLink>
        </nav>
    )
}