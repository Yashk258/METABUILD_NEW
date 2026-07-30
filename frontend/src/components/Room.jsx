import Wall from "./Wall";
import { Text } from "@react-three/drei";
import useHouseStore from "../store/useHouseStore";

const roomColors = {
  "Living Room": "#d8e2dc",
  "Bedroom 1": "#cde7ff",
  "Bedroom 2": "#ffd6d6",
  Kitchen: "#d4edda",
};

export default function Room({
  id,
  name,
  width,
  length,
  height,
  x,
  z,
}) {
  const color = roomColors[name] || "#eeeeee";

  const { selectedRoom, selectRoom } = useHouseStore();

  const isSelected = selectedRoom?.id === id;

  return (
    <group position={[x, 0, z]}>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();

          selectRoom({
            id,
            name,
            width,
            length,
            height,
            x,
            z,
          });
        }}
      >
        <planeGeometry args={[width, length]} />

        <meshStandardMaterial
          color={isSelected ? "#22c55e" : color}
        />
      </mesh>

      {/* Walls */}

      <Wall
        position={[0, height / 2, -length / 2]}
        width={width}
        height={height}
        depth={0.2}
      />

      <Wall
        position={[0, height / 2, length / 2]}
        width={width}
        height={height}
        depth={0.2}
      />

      <Wall
        position={[-width / 2, height / 2, 0]}
        width={0.2}
        height={height}
        depth={length}
      />

      <Wall
        position={[width / 2, height / 2, 0]}
        width={0.2}
        height={height}
        depth={length}
      />

      <Text
        position={[0, 0.05, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.6}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}