export default function Plot({ width, length }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[width, length]} />
      <meshStandardMaterial color="#d8f3dc" />
    </mesh>
  );
}