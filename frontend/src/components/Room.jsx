import Wall from "./Wall";

export default function Room({
  width,
  length,
  height,
  x,
  z
}) {
  return (
    <>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[x + width / 2, 0.01, z + length / 2]}
      >
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {/* Front */}
      <Wall
        position={[x + width / 2, height / 2, z]}
        width={width}
        height={height}
        depth={0.2}
      />

      {/* Back */}
      <Wall
        position={[x + width / 2, height / 2, z + length]}
        width={width}
        height={height}
        depth={0.2}
      />

      {/* Left */}
      <Wall
        position={[x, height / 2, z + length / 2]}
        width={0.2}
        height={height}
        depth={length}
      />

      {/* Right */}
      <Wall
        position={[x + width, height / 2, z + length / 2]}
        width={0.2}
        height={height}
        depth={length}
      />
    </>
  );
}