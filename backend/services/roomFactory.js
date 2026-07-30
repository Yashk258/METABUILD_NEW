export function createRoom({
  id,
  name,
  width,
  length,
  height = 3,
  x = 0,
  z = 0,
}) {
  return {
    id,
    name,
    width,
    length,
    height,
    x,
    z,
  };
}