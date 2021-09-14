import React from "react";
import Link from "next/link";
import Image from "next/image";
import companyLogo from "../public/rolyn.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./style.module.css";
export default function Header() {
  return (
    <div>
      <div className={`header_container ${styles.padds}`}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <Image src={companyLogo} alt="Rolyn" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link eventKey={2} href="/portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="/clients">Clients</Nav.Link>
                <Nav.Link eventKey={2} href="/getqoute">
                  Get A Qoute
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
