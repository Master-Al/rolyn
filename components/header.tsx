import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className={`container-fluid fixed-top`}>
      <div className="container padds">
        <div className="row justify-content-md-center ">
          <div className="col-md-10">
            <nav
              className="navbar navbar-expand-lg navbar-light"
              style={{ padding: "0px" }}
            >
              <a className="navbar-brand" href="#">
                <img src="/vercel.svg" alt="logo" className="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  // className={this.state.toggleIcon}
                  style={{ color: "white" }}
                ></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link href="/" passHref>
                      <a className={`nav-link `}>Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Services" passHref>
                      <a className={`nav-link `}>Services</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Portfolio" passHref>
                      <a className={`nav-link `}>Portfolio</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Clients" passHref>
                      <a className={`nav-link `}>Clients</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Getqoute" passHref>
                      <a className={`nav-link `}>Get A Qoute</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
