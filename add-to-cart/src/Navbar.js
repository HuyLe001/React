import React from "react";
import { useCart } from "react-use-cart";

const Navbar = () => {
    const { totalItems } = useCart();

    return (
        <nav className="navbar navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#home">
                    🛒 Fruit Store
                </a>
                <button 
                    className="btn btn-outline-primary position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                >
                    <i className="bi bi-cart3"></i> Cart
                    {totalItems > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
