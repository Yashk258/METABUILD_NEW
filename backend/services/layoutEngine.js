import { createRoom } from "./roomFactory.js";

export function generateLayout(requirements) {
  const rooms = [];

  const plotWidth = requirements.plot.width;
  const plotLength = requirements.plot.length;

  const livingWidth = plotWidth;
  const livingLength = plotLength * 0.35;

  const bedroomWidth = plotWidth / 2;
  const bedroomLength = plotLength * 0.30;

  const kitchenWidth = plotWidth / 2;
  const kitchenLength = plotLength * 0.35;

  // Living Room
rooms.push(
  createRoom({
    id: 1,
    name: "Living Room",
    width: livingWidth,
    length: livingLength,
    x: 0,
    z: 0,
  })
);

  // Bedroom 1
  rooms.push({
    id: 2,
    name: "Bedroom 1",
    width: bedroomWidth,
    length: bedroomLength,
    height: 3,
    x: -plotWidth / 4,
    z: livingLength,
  });

  // Bedroom 2
  rooms.push({
    id: 3,
    name: "Bedroom 2",
    width: bedroomWidth,
    length: bedroomLength,
    height: 3,
    x: plotWidth / 4,
    z: livingLength,
  });

  // Kitchen
  rooms.push({
    id: 4,
    name: "Kitchen",
    width: kitchenWidth,
    length: kitchenLength,
    height: 3,
    x: -plotWidth / 4,
    z: livingLength + bedroomLength,
  });

  return { rooms };
}