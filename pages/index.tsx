import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Typist from "react-typist";
import { Row, Col } from "react-bootstrap";

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
          <link rel="icon" href="/rolyn.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.container}>
          <Row className={styles.rows}>
            <Col sm={6}>
              <div className={styles.textarea}>
                <Typist
                  className="MyTypist"
                  cursor={{
                    show: false,
                    blink: true,
                    element: "|",
                    hideWhenDone: true,
                    hideWhenDoneDelay: 100,
                  }}
                >
                  <div className={styles.QuestionRolyn}>
                    Hey! What&rsquo;s Rolyn? Do you have
                  </div>
                  <Typist.Backspace count={11} delay={200} />
                  <div className={styles.QuestionMobile}>
                    Do you have a <br /> Mobile Application Idea?
                  </div>
                  <div className={styles.paragraph}>
                    We can help you built it! Turn your imagination and ideas
                    into <br />
                    reality. Check us out and Message us!
                  </div>
                </Typist>
              </div>
              <button className={styles.bordered}>Get a Qoute</button>
            </Col>

            <Col sm={6}>
              <Row>
                <Col>image</Col>
                <Col>
                  Content <br /> Content <br /> Content
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}
