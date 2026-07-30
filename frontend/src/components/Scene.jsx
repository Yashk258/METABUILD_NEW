import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Environment } from "@react-three/drei";
import House from "./House";

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [12, 8, 12],
        fov: 50,
      }}
    >
      <color attach="background" args={["#dfe9f3"]} />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[10, 15, 10]}
        intensity={2}
        castShadow
      />

      <Grid
        args={[50, 50]}
        cellSize={1}
        sectionSize={5}
        infiniteGrid
      />

      <House />

      <Environment preset="city" />

      <OrbitControls />
    </Canvas>
  );
}