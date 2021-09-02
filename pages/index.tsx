import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Rolyn</title>
          <meta
            name="description"
            content="Rolyn generated by create next app"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="container">
          <div className={`row ${styles.rows}`}>
            <div className={`col`}>
              <div className={styles.QuestionRolyn}>Hey! What's Rolyn?</div>
              <div className={styles.QuestionMobile}>
                Do you have a <br /> Mobile Application Idea?
              </div>
              <div className={styles.paragraph}>
                We can help you built it! Turn your imagination and ideas into{" "}
                <br />
                reality. Check us out and Message us!
              </div>
              <button
                type="button"
                className={`btn btn-primary ${styles.bordered}`}
              >
                Get a Qoute
              </button>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">image</div>
                <div className="col">Content</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}