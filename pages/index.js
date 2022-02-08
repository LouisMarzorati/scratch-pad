import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scratch Pad</title>
        <meta name="description" content="Lou dev testing n fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>howdy</h1>
        <p className={styles.description}>yeah yeah yeah yeah yeah</p>
      </main>
    </div>
  );
}
