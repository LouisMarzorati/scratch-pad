import Lottie from "lottie-react";
import Head from "next/head";
import { useState } from "react";
import animationData from "../public/animations/fading-cubes-loader-2.json";
import styles from "../styles/Home.module.scss";
export default function Home() {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Scratch Pad</title>
        <meta name="description" content="Lou dev testing n fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>howdy</h1>
        <p className={styles.description}>
          <Lottie animationData={animationData} loop={!isPaused} />
        </p>
        <button onClick={handlePause}>{isPaused ? "Play" : "Pause"}</button>
      </main>
    </div>
  );
}
