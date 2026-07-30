export function solveLayout(graph, plot) {
  const rooms = [];

  const roomWidth = 6;
  const roomLength = 6;

  let currentX = 0;
  let currentZ = 0;

  graph.nodes.forEach((node, index) => {
    rooms.push({
      id: node.id,
      name: node.name,
      type: node.type,

      width: roomWidth,
      length: roomLength,
      height: 3,

      x: currentX,
      z: currentZ,
    });

    currentX += roomWidth;

    if ((index + 1) % 3 === 0) {
      currentX = 0;
      currentZ += roomLength;
    }
  });

  return rooms;
}