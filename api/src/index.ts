import express from "express";
import cors from "cors";

import { geolocatorController } from "./controllers/geolocator";

const app = express();
const PORT = 8001;

app.use(cors());
app.use("/api", geolocatorController);

app.listen(PORT, () => {
  console.log(`🖥 [server]: server is running at http://localhost:${PORT}`);
});
