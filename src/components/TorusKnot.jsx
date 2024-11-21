import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";

const TorusKnot = ({ position = [0, 0, 0], args = [5, 1, 128, 32] }) => {
  const ref = useRef();

  // Leva controls for dynamic tweaking
  const { baseColor, emissiveColor, emissiveIntensity, rotationSpeed } = useControls({
    baseColor: { value: "#6A0DAD" }, 
    emissiveColor: { value: "#9B30FF" }, 
    emissiveIntensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
    rotationSpeed: { value: 0.5, min: 0, max: 3, step: 0.1 },
  });

  // Rotate the TorusKnot
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * rotationSpeed;
      ref.current.rotation.x += delta * (rotationSpeed / 2);
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={args} />
      {/* Cool glowing material */}
      <meshStandardMaterial
        color={baseColor}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
        roughness={0.2} // Glossy surface
        metalness={0.8} // Metallic appearance
      />
    </mesh>
  );
};

export default TorusKnot;

