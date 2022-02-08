import LottiePlayer from "../../components/LottiePlayer";
import animationData from "../../public/animations/snazzy.json";
import styles from "../../styles/Home.module.scss";
export default function BlocksPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Snazzy</h1>
        <p>
          <LottiePlayer animationData={animationData} />
        </p>
      </main>
    </div>
  );
}
