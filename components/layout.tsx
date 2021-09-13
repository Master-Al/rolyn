import React from "react";
import Header from "./header";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Rolyn</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.12/css/all.css"
          integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className={styles.containers}>
        {/* Top */}
        <div className={styles.TopOverlay} />
        <Header />
        {/* <div className={styles.iconBar}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div> */}
        {children}
        {/* Bottom */}
        <div className={styles.BootomOverlay} />
      </div>
    </div>
  );
}
