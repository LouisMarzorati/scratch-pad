import LottiePlayer from "../../components/LottiePlayer";
import animationData from "../../public/animations/fading-cubes-loader-2.json";
export default function BlocksPage() {
  return (
    <div>
      <h1>Blocks</h1>
      <p>
        <LottiePlayer animationData={animationData} />
      </p>
    </div>
  );
}
