import React from "react";
import Link from "next/link";
import Image from "next/image";
import companyLogo from "../public/rolyn.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <div className={`container-fluid fixed-top`}>
      <div className="container padds">
        <div className="row justify-content-md-center ">
          <div className="col-md-12">
            {/* <nav
              className="navbar navbar-expand-lg navbar-light"
              style={{ padding: "0px" }}
            >
              <a className="navbar-brand" href="#">
                <Image src={companyLogo} alt="Rolyn" />
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
            </nav> */}
            <Navbar collapseOnSelect expand="xl">
              <Container>
                <Navbar.Brand href="/">
                  <Image src={companyLogo} alt="Rolyn" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                  <Nav>
                    <Nav.Link href="/Services">
                      <span style={{ color: "#fffff" }}>More deets</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey={2}
                      href="#memes"
                      className={`nav-link `}
                    >
                      Dank memes
                    </Nav.Link>
                    <Nav.Link href="#deets" className={`nav-link `}>
                      More deets
                    </Nav.Link>
                    <Nav.Link
                      eventKey={2}
                      href="#memes"
                      className={`nav-link `}
                    >
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
