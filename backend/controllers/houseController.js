import requirements from "../data/requirements.js";
import { generateHouse } from "../services/houseGenerator.js";

export const generateHouseController = (req, res) => {
  const house = generateHouse(requirements);

  res.json(house);
};