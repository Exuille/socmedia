import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <div className="nav-container">
                <Link to="/">
                    <h1>Clique</h1>
                </Link>
                <nav>
                    <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/account-settings'>Account Settings</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar