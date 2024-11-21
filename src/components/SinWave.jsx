import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SinWave=({ position = [0, 0, 0] }) => {
  const lineRef = useRef();

  useFrame(({ clock }) => {
    if (lineRef.current) {
      const time = clock.elapsedTime;

      // Update the vertices to create a moving sine wave
      const positions = lineRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        positions[i + 1] = Math.sin(x * 3.0 - time) * 1.5; // y = sin(frequency * x - time) * amplitude
      }
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Create vertices for the sine wave in the range [0, 2π]
  const generateSineWaveVertices = () => {
    const vertices = [];
    const resolution = 100; // Number of points in the wave
    const step = (2 * Math.PI) / resolution; // Distance between points

    for (let i = 0; i <= resolution; i++) {
      const x = i * step; // x position
      const y = 0; // Initial y position (will be updated dynamically)
      const z = 0; // No thickness (z = 0)
      vertices.push(x, y, z);
    }

    return new Float32Array(vertices);
  };

  return (
    <line ref={lineRef} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={generateSineWaveVertices()}
          count={101} // 100 steps + 1 for the endpoint
          itemSize={3} // x, y, z for each point
        />
      </bufferGeometry>
      <lineBasicMaterial color={"#FF0000"} linewidth={2} />
    </line>
  );
};

export default SinWave;