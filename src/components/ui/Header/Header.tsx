import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const AppBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Crypto Quotation</a>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active`} href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;