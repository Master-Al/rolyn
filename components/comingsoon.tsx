import React from "react";
// import Image from "next/image";
// import companyLogo from "../public/rolyn.png";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./style.module.css";

export default function ComingSoon() {
  return (
    <div className={styles.comingsoon}>
      <div className={styles.comingsoonContent}>
        <div className={styles.comingsoonText}>We are coming soon </div>
        <p className={styles.comingsoondesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`&rsquo;`s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries
        </p>
      </div>
    </div>
  );
}
