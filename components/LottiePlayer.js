import Lottie from "lottie-react";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
export default function LottiePlayer({ animationData }) {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className={styles.lottiePlayer}>
      <Lottie animationData={animationData} loop={!isPaused} />
      <button onClick={handlePause}>{isPaused ? "Play" : "Pause"}</button>
    </div>
  );
}
