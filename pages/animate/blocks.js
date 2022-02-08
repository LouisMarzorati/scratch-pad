import LottiePlayer from "../../components/LottiePlayer";
import animationData from "../../public/animations/fading-cubes-loader-2.json";
import styles from "../../styles/Home.module.scss";
export default function BlocksPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Blocks</h1>
        <p>
          <LottiePlayer animationData={animationData} />
        </p>
      </main>
    </div>
  );
}
