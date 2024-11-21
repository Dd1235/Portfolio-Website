import { Leva } from 'leva';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, Text } from '@react-three/drei';
// import { Sphere } from '../components/Sphere.jsx';



import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { calculateSizes } from '../constants/index.js';
import SinWave from '../components/SinWave.jsx';

import TorusKnot from '../components/TorusKnot.jsx';
import Sphere from '../components/Sphere.jsx';




const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="hero_title sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          <span className = "">Hello! I am Dedeepya Avancha <span className="waving-hand">👋</span></span> 
        </p>
        <p className="hero_tag text-gray_gradient">Second Year CSE Student</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position = {[0,0,30]} />

            
            <group>
              <Target position={sizes.targetPosition} />
               <TorusKnot position={sizes.torusPosition}  />
              <SinWave position = {sizes.sinPosition} />
              <Sphere position={sizes.spherePosition} args={[1, 32, 16]} />

            </group> 
          
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div> */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
  <div className="w-full h-full absolute inset-0">
    <Canvas className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        {/* To hide controller */}
        <Leva hidden />
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

        <group>
          {/* Central Text */}
          <Text
              position={[0, 0, 0]} // Center the text
              fontSize={3} // Size of the text
              color="white" // Text color
              anchorX="center" // Align text horizontally
              anchorY="middle" // Align text vertically
              letterSpacing={-0.05} // Adjust letter spacing (negative reduces space)
              lineHeight={1} // Adjust line height for multiline text
            >
              Hello! I am Dedeepya Avancha 👋
          </Text>

          {/* Elements in the corners */}
          <Target position={[-10, -10, 0]} />
          <TorusKnot position={[10, 2, 0]} args={[1, 0.1 , 128, 32]} />
          <SinWave position={[-20, 2, 0]} />
          <Sphere position={[15, -6, 0]} args={[2, 32, 16]} />
        </group>

        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </Canvas>
  </div>
</div>


      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
