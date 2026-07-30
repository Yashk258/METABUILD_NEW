export function hasOverlap(rooms) {
  for (let i = 0; i < rooms.length; i++) {
    for (let j = i + 1; j < rooms.length; j++) {
      const a = rooms[i];
      const b = rooms[j];

      const overlapX =
        Math.abs(a.x - b.x) < (a.width + b.width) / 2;

      const overlapZ =
        Math.abs(a.z - b.z) < (a.length + b.length) / 2;

      if (overlapX && overlapZ) {
        return true;
      }
    }
  }

  return false;
}