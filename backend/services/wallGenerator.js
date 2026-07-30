export function generateWalls(rooms) {
  const walls = [];

  rooms.forEach((room) => {
    const left = room.x - room.width / 2;
    const right = room.x + room.width / 2;
    const top = room.z - room.length / 2;
    const bottom = room.z + room.length / 2;

    walls.push({
      id: `${room.id}-north`,
      roomId: room.id,
      direction: "north",
      type: "exterior",
      x1: left,
      z1: top,
      x2: right,
      z2: top,
    });

    walls.push({
      id: `${room.id}-south`,
      roomId: room.id,
      direction: "south",
      type: "exterior",
      x1: left,
      z1: bottom,
      x2: right,
      z2: bottom,
    });

    walls.push({
      id: `${room.id}-west`,
      roomId: room.id,
      direction: "west",
      type: "exterior",
      x1: left,
      z1: top,
      x2: left,
      z2: bottom,
    });

    walls.push({
      id: `${room.id}-east`,
      roomId: room.id,
      direction: "east",
      type: "exterior",
      x1: right,
      z1: top,
      x2: right,
      z2: bottom,
    });
  });

  return walls;
}