import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function SwipePage() {
  const [direction, setDirection] = useState("");
  const handlers = useSwipeable({
    onSwipedLeft: () => setDirection("swiped left"),
    onSwipedRight: () => setDirection("swiped right"),
    onSwipedUp: () => setDirection("swiped up"),
    onSwipedDown: () => setDirection("swiped down"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <>
      <div>{direction}</div>
      <div
        {...handlers}
        style={{
          padding: "2rem",
          border: "1px solid #f1f1f1",
          cursor: "pointer",
        }}
      >
        {" "}
        You can swipe here{" "}
      </div>
    </>
  );
}
