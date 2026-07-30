import Ground from "./Ground";
import Room from "./Room";

import houseData from "../data/house.json";

export default function House() {
  return (
    <>
      <Ground />

      {houseData.rooms.map((room) => (
        <Room
          key={room.id}
          {...room}
        />
      ))}
    </>
  );
}