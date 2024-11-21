import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = ({ position, args = [1, 32, 32] }) => {
    const ref = useRef();
  
  
    useFrame((state, delta) => {
      ref.current.rotation.y += delta * 0.2;
      ref.current.rotation.x += delta * 0.1;
    });
  
    return (
      <mesh
        position={position}
        ref={ref}
      >
        <sphereGeometry args={args} />
        <meshStandardMaterial
          color = {"#7FFFD4"}
          wireframe
        />
      </mesh>
    );
  };

export default Sphere;