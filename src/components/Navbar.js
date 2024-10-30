import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-white">
        <div className="container-fluid">
            <Link className="navbar-brand" href="#">Ecom</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Search</Link>
                    </li>
                </ul>
                    <button className="btn btn-outline-success" type="submit">Login</button>
            </div>
        </div>
    </nav>
</div>
)
}
