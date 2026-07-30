import { useEffect, useState } from "react";
import useHouseStore from "../../store/useHouseStore";

export default function Inspector() {
  const { selectedRoom, updateRoom } = useHouseStore();

  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (selectedRoom) {
      setRoom({ ...selectedRoom });
    }
  }, [selectedRoom]);

  if (!room) {
    return (
      <aside className="w-72 bg-zinc-900 border-l border-zinc-800 p-4">
        <h2 className="text-xl font-bold mb-4">Inspector</h2>

        <p className="text-zinc-400">
          Select a room to edit.
        </p>
      </aside>
    );
  }

  return (
    <aside className="w-72 bg-zinc-900 border-l border-zinc-800 p-4">
      <h2 className="text-xl font-bold mb-5">
        {room.name}
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block mb-1">Width</label>

          <input
            type="number"
            value={room.width}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) =>
              setRoom({
                ...room,
                width: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block mb-1">Length</label>

          <input
            type="number"
            value={room.length}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) =>
              setRoom({
                ...room,
                length: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block mb-1">Height</label>

          <input
            type="number"
            value={room.height}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) =>
              setRoom({
                ...room,
                height: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="pt-2">
          <p>
            <strong>Area:</strong>{" "}
            {(room.width * room.length).toFixed(2)} m²
          </p>
        </div>

        <button
          className="w-full rounded bg-emerald-500 p-2 font-semibold hover:bg-emerald-600"
          onClick={() => updateRoom(room)}
        >
          Update Room
        </button>

      </div>
    </aside>
  );
}