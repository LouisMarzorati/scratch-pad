import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import SpaceCadetModelMidRes from "../../lib/SpaceCadetModelMidRes";
export default function BasicThreePage() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
      }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 4, 4], fov: 50 }}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Suspense fallback={null}>
        <SpaceCadetModelMidRes position={[0, 0, 0]} />
        <Environment files={"sapaced.hdr"} path={"/hdr/"} />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={1.5}
          far={0.8}
        />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

function Rotate(props) {
  const ref = useRef();
  useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime));
  return <group ref={ref} {...props} />;
}
