import LottiePlayer from "../../components/LottiePlayer";
import animationData from "../../public/animations/snazzy.json";
export default function BlocksPage() {
  return (
    <div>
      <h1>Snazzy</h1>
      <p>
        <LottiePlayer animationData={animationData} />
      </p>
    </div>
  );
}
