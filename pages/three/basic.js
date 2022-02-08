import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
function Model({ ...props }) {
  useEffect(() => {
    console.log("actions ", actions);
    // actions[names[0]]?.setDuration(4)?.play();
    actions[names[0]]?.play();
  }, [index, actions, names]);
  const [index, setIndex] = useState();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/3d/space-cadet.glb");
  const { ref, actions, names } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Armature"
        position={[0, -0.29, -1.3]}
        onClick={() => setIndex((index + 1) % names.length)}
      >
        <primitive object={nodes.mixamorigHips} />
        <primitive object={nodes.Ctrl_Master} />
        <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
        <primitive object={nodes.Ctrl_Hand_IK_Left} />
        <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
        <primitive object={nodes.Ctrl_Hand_IK_Right} />
        <primitive object={nodes.Ctrl_Foot_IK_Left} />
        <primitive object={nodes.Ctrl_LegPole_IK_Left} />
        <primitive object={nodes.Ctrl_Foot_IK_Right} />
        <primitive object={nodes.Ctrl_LegPole_IK_Right} />
        <skinnedMesh
          geometry={nodes.Cube005.geometry}
          material={materials.Material}
          skeleton={nodes.Cube005.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_1.geometry}
          material={materials["Material.007"]}
          skeleton={nodes.Cube005_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_2.geometry}
          material={materials["Material.003"]}
          skeleton={nodes.Cube005_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_3.geometry}
          material={materials["Material.004"]}
          skeleton={nodes.Cube005_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_4.geometry}
          material={materials["Material.005"]}
          skeleton={nodes.Cube005_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_5.geometry}
          material={materials["Material.006"]}
          skeleton={nodes.Cube005_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_6.geometry}
          material={materials["Material.001"]}
          skeleton={nodes.Cube005_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_7.geometry}
          material={materials["Material.002"]}
          skeleton={nodes.Cube005_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_8.geometry}
          material={materials["Material.009"]}
          skeleton={nodes.Cube005_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube005_9.geometry}
          material={nodes.Cube005_9.material}
          skeleton={nodes.Cube005_9.skeleton}
        />
        <mesh
          geometry={nodes.BezierCurve.geometry}
          material={nodes.BezierCurve.material}
          position={[1.6, 1.45, 0.05]}
          scale={0.19}
        >
          <Html distanceFactor={10}>
            <div
              style={{
                "padding-top": "10px",
                transform: "translate3d(50%, 0, 0)",
                "text-align": "left",
                background: "#202035",
                color: "white",
                padding: "10px 15px",
                "border-radius": "5px",
              }}
            >
              hello <br />
              world
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  );
}

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
        <Model position={[0, 0, 0]} />
        <Environment preset="night" />
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
