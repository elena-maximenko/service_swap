import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                             <Link to={'/'} className="nav-link" href="/">
                                <div className="col">Users</div>
                                <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/category'} className="nav-link">
                                <div className="col">Categories</div>
                        </Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <div className="col">Services</div>
                                <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <div className="col">Claims</div>
                                <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <div className="col">Responses</div>
                                <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <div className="col"> Log out</div>
                                <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Header;