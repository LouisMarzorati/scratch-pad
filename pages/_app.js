import Head from "next/head";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scratch Pad</title>
        <meta name="description" content="Lou dev testing n fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
