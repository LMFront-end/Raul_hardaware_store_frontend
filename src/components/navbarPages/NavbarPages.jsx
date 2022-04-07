import React from "react";
import { Link } from "react-router-dom";


const NavbarPages = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Raul's Hardware Store
          </Link>
        </div>
      </nav>
    </>
  );
};

export { NavbarPages };
