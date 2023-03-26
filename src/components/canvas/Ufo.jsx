import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ufo = ({ isMobile }) => {
  const ufo = useGLTF("./ufo/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={ufo.scene}
        scale={isMobile ? 0.005 : 0.008}
        position={isMobile ? [0, -1.8, 0.1] : [1.5, -1.4, 0.2]}
        rotation={[-0.01, 1, -0]}
      />
    </mesh>
  );
};

const UfoCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [20, 3, 5], fov: 25 }}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      className="max-h-[600px] sm:max-h-none"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <Ufo isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default UfoCanvas;
