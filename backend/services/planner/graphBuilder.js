export function buildGraph(requirements) {
  const nodes = [];
  const edges = [];

  let id = 1;

  // Living Room
  nodes.push({
    id: id++,
    type: "living",
    name: "Living Room",
  });

  // Bedrooms
  for (let i = 0; i < requirements.rooms.bedrooms; i++) {
    nodes.push({
      id: id++,
      type: "bedroom",
      name: `Bedroom ${i + 1}`,
    });
  }

  // Bathrooms
  for (let i = 0; i < requirements.rooms.bathrooms; i++) {
    nodes.push({
      id: id++,
      type: "bathroom",
      name: `Bathroom ${i + 1}`,
    });
  }

  // Kitchen
  if (requirements.rooms.kitchen > 0) {
    nodes.push({
      id: id++,
      type: "kitchen",
      name: "Kitchen",
    });
  }

  return {
    nodes,
    edges,
  };
}