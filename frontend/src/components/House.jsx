import { useEffect } from "react";
import { getHouse } from "../services/api";
import Room from "./Room";
import useHouseStore from "../store/useHouseStore";

export default function House() {
  const { rooms, setRooms } = useHouseStore();

  useEffect(() => {
    async function loadHouse() {
      try {
        const data = await getHouse();
        setRooms(data.rooms);
      } catch (err) {
        console.error(err);
      }
    }

    loadHouse();
  }, [setRooms]);

  return (
    <>
      {rooms.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </>
  );
}