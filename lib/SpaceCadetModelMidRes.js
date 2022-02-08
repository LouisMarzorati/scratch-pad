import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
export default function SpaceCadetModelMidRes({ ...props }) {
  useEffect(() => {
    actions[names[0]]?.setDuration(4)?.play();
    // actions[names[0]]?.play();
  }, [index, actions, names]);
  const [index, setIndex] = useState();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/3d/space-cadet-mid-res.glb"
  );
  const { ref, actions, names } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[0, -1, -1.3]}>
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
          material={materials["Material.010"]}
          skeleton={nodes.Cube005_9.skeleton}
        />
      </group>
    </group>
  );
}
