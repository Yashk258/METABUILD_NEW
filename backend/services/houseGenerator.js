import { generateLayout } from "./layoutEngine.js";
import { generateWalls } from "./wallGenerator.js";
import { buildGraph } from "./planner/graphBuilder.js";
import { solveAdjacency } from "./planner/adjacencySolver.js";
import { solveLayout } from "./planner/layoutSolver.js";
import { hasOverlap } from "./planner/overlapChecker.js";

export function generateHouse(requirements) {
  const graph = buildGraph(requirements);

const solvedGraph = solveAdjacency(graph);

const plannedRooms = solveLayout(
  solvedGraph,
  requirements.plot
);

if (hasOverlap(plannedRooms)) {
  console.warn("Room overlap detected");
}
  const layout = generateLayout(requirements);

  // Generate walls from the rooms
  const walls = generateWalls(layout.rooms);

  // Return the complete house object
  return {
    plot: {
      width: requirements.plot.width,
      length: requirements.plot.length,
    },

    house: {
      floors: 1,
      style: requirements.style,
      totalArea: requirements.plot.width * requirements.plot.length,
    },

    rooms: layout.rooms,

    walls: walls,

    doors: [],

    windows: [],

    roof: null,

    furniture: [],

    parking: requirements.parking,

    garden: requirements.garden,
  };
}