export function validateLayout(rooms, plot) {
  const errors = [];

  rooms.forEach((room) => {
    if (room.width <= 0 || room.length <= 0) {
      errors.push(`${room.name} has an invalid size.`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}