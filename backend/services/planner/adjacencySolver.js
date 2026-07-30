export function solveAdjacency(graph) {
  const edges = [];

  const living = graph.nodes.find((n) => n.type === "living");
  const kitchen = graph.nodes.find((n) => n.type === "kitchen");
  const bedrooms = graph.nodes.filter((n) => n.type === "bedroom");
  const bathrooms = graph.nodes.filter((n) => n.type === "bathroom");

  // Living → Kitchen
  if (living && kitchen) {
    edges.push({
      from: living.id,
      to: kitchen.id,
      type: "adjacent",
    });
  }

  // Living → Bedrooms
  bedrooms.forEach((bedroom) => {
    edges.push({
      from: living.id,
      to: bedroom.id,
      type: "adjacent",
    });
  });

  // Bedroom → Bathroom
  bedrooms.forEach((bedroom, index) => {
    if (bathrooms[index]) {
      edges.push({
        from: bedroom.id,
        to: bathrooms[index].id,
        type: "attached",
      });
    }
  });

  return {
    ...graph,
    edges,
  };
}