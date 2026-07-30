import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import houseRoutes from "./routes/houseRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/house", houseRoutes);

app.get("/", (req, res) => {
  res.send("MetaBuild Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});