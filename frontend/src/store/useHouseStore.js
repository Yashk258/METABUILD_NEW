import { create } from "zustand";

const useHouseStore = create((set) => ({
  rooms: [],
  selectedRoom: null,

  setRooms: (rooms) =>
    set({
      rooms,
    }),

  selectRoom: (room) =>
    set({
      selectedRoom: room,
    }),

  updateRoom: (updatedRoom) =>
    set((state) => ({
      rooms: state.rooms.map((room) =>
        room.id === updatedRoom.id
          ? { ...room, ...updatedRoom }
          : room
      ),

      selectedRoom: {
        ...state.selectedRoom,
        ...updatedRoom,
      },
    })),
}));

export default useHouseStore;