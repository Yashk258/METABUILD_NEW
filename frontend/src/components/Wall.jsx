export default function Wall({
  position,
  rotation = [0, 0, 0],
  width,
  height,
  depth,
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="#f5f5f5" />
    </mesh>
  );
}