import React from "react";
import { Link, Navigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { TiThMenu } from "react-icons/ti";

function Header() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="image/logo.png " alt="" />
        </div>

        <div className="menubar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link class="nav-link" to={"/"}>
                    Home <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" activeClass="active" to="Mens">
                    Men's
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Women's
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    kid's's
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link class="dropdown-item" to={"/about"}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/product"}>
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/single-product"}>
                        Single Product
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/contact"}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Women's
                  </a>
                </li> */}
                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Features Page 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Features Page 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Features Page 3
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Features Page 4
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Log in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
